import PersonModal from "../models/personModel.js";
import mongoose from "mongoose";

export const createPerson = async (req, res) => {
  const person = req.body;
  const newperson = new PersonModal({
    ...person,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newperson.save();
    res.status(201).json(newperson);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

// export const getPersons = async (req, res) => {
//   try {
//     const tours = await PersonModal.find();
//     res.status(200).json(tours);
//   } catch (error) {
//     res.status(404).json({ message: "Something went wrong" });
//   }
// };

// all && pagination
export const getPersons = async (req, res) => {
  const { page } = req.query;
  try {
    // const tours = await PersonModal.find();
    // res.status(200).json(tours);

    const limit = 6;
    const startIndex = (Number(page) - 1) * limit;
    const total = await PersonModal.countDocuments({});
    const persons = await PersonModal.find().limit(limit).skip(startIndex);
    res.json({
      data: persons,
      currentPage: Number(page),
      totalPersons: total,
      numberOfPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getPerson = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await PersonModal.findById(id);
    res.status(200).json(person);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getPersonsByUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "User doesn't exist" });
  }
  const userPersons = await PersonModal.find({ creator: id });
  res.status(200).json(userPersons);
};

export const deletePerson = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: `No Person exist with id: ${id}` });
    }
    await PersonModal.findByIdAndRemove(id);
    res.json({ message: "Person deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const updatePerson = async (req, res) => {
  const { id } = req.params;
  const {
    creator,
    name,
    email,
    address,
    phone,
    title,
    description,
    imageFile,
  } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: `No person exist with id: ${id}` });
    }

    const updatedperson = {
      creator,
      name,
      email,
      address,
      phone,
      title,
      description,
      imageFile,
      _id: id,
    };
    await PersonModal.findByIdAndUpdate(id, updatedperson, { new: true });
    res.json(updatedperson);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getPersonsBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const title = new RegExp(searchQuery, "i");
    const persons = await PersonModal.find({ title });
    res.json(persons);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getPersonsByTag = async (req, res) => {
  const { tag } = req.params;
  try {
    const persons = await PersonModal.find({ tags: { $in: tag } });
    res.json(persons);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
