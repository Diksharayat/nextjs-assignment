"use client";
import { ChevronDownIcon } from "@/icons";
import { Edit2, Facebook, Flag, Instagram, Phone, PhoneOutgoing, PlusCircle, Twitter } from "@deemlol/next-icons";
import { Mail, MessageCircleMore } from "lucide-react";



import React, { useState } from "react";
import InfoCard from "./InfoCard";

interface UserProfileData {
  id: string;
  name: string;
  status: string;
  age: string;
  height: string;
  suburb: string;
  address: string;
  image: string;
  social: {
    facebook: React.ReactNode;
    instagram: React.ReactNode;
    twitter: React.ReactNode;
  };
  contact: {
    email: React.ReactNode;
    chat: React.ReactNode;
    phone: React.ReactNode;
    online: React.ReactNode;
  };
}

const userData: UserProfileData = {
  id: "121212",
  name: "Mr. John Key",
  status: "Active",
  age: "30 to 35 Years",
  height: "5 to 230 cms",
  suburb: "Bondi",
  address: "Sydney, Aus",
  image: "/images/user.jpg",
  social: {
    facebook: <Facebook className=" bg[#014d56] w-5 h-5" />,
    instagram: <Instagram className="bg[#014d56] w-5 h-5" />,
    twitter: <Twitter className="bg[#014d56] w-5 h-5" />
  },
  contact: {
    email: <Mail className="bg[#014d56]" />,
    chat: <MessageCircleMore className="bg[#014d56]" />,
    phone: <Phone className="bg[#014d56]" />,
    online: <PhoneOutgoing className="bg[#014d56]" />
  }
};

const UserProfileCard: React.FC = () => {
  const profileFields = [
    { label: "Age", value: userData.age },
    { label: "Height", value: userData.height },
    { label: "Suburb", value: userData.suburb },
    { label: "Address", value: userData.address }
  ];

  const detailedProfileFields = [
    { label: "Suburb", value: "Bondi" },
    { label: "Occupation", value: "Account Manager" },
    { label: "Height", value: "165cms" },
    { label: "Weight", value: "55kg" },
    { label: "Age", value: "40 Years" },
    { label: "Hair & Eyes", value: "Bl Bl" },
    { label: "Birth Place", value: "Sydney" },
    { label: "Marital Status", value: "Unmarried" },
    { label: "Physical Type", value: "Medium" },
    { label: "Looks", value: "Very Attractive" },
    { label: "Smoking", value: "Light/Smoking" },
    { label: "Drinking", value: "Socially" },
    { label: "Transport", value: "Car" },
    { label: "Education", value: "Tertiary" },
    { label: "Working Hours", value: "Normal Hours" },
    { label: "Religion", value: "No Practicing" },
    { label: "Future Kids", value: "Can Have" },
    { label: "Residence", value: "Owns" },
    { label: "Hair Loss", value: "None" },
    { label: "Education", value: "Tertiary" },
    { label: "Working Hours", value: "Normal Hours" },
    { label: "Religion", value: "No Practicing" },
    { label: "Future Kids", value: "Can Have" },
    { label: "Residence", value: "Owns" },
    { label: "Hair Loss", value: "None" },
    { label: "Education", value: "Tertiary" },
    { label: "Working Hours", value: "Normal Hours" },
    { label: "Religion", value: "No Practicing" },
    { label: "Future Kids", value: "Can Have" },
    { label: "Residence", value: "Owns" },
    { label: "Hair Loss", value: "None" },
    { label: "Education", value: "Tertiary" },
    { label: "Working Hours", value: "Normal Hours" },
    { label: "Religion", value: "No Practicing" },
    { label: "Future Kids", value: "Can Have" },
    { label: "Residence", value: "Owns" },
    { label: "Hair Loss", value: "None" },
    { label: "Education", value: "Tertiary" },
    { label: "Working Hours", value: "Normal Hours" },
    { label: "Religion", value: "No Practicing" },
    { label: "Future Kids", value: "Can Have" },
    { label: "Residence", value: "Owns" },
    { label: "Hair Loss", value: "None" },
    { label: "Education", value: "Tertiary" },
    { label: "Working Hours", value: "Normal Hours" },
    { label: "Religion", value: "No Practicing" },
    { label: "Future Kids", value: "Can Have" },
    { label: "Residence", value: "Owns" },
    { label: "Hair Loss", value: "None" },
    { label: "Education", value: "Tertiary" },
    { label: "Working Hours", value: "Normal Hours" },
    { label: "Religion", value: "No Practicing" },
    { label: "Future Kids", value: "Can Have" },
    { label: "Residence", value: "Owns" },
    { label: "Hair Loss", value: "None" }

  ];


  const notesData = [
    {
      author: "EMMA",
      date: "8/10/24 : Tue, 11:04 AM",

      message: " Sent SMS:No Response pending"
    },
    {
      author: "EMMA",
      date: "8/10/24 : Tue, 11:04 AM",
      message: "Postpone: Intro with Pri as he is travelling and be back 17th oct"
    },
    {
      author: "Adriana",
      date: "8/10/24 : Tue, 11:04 AM",
      message: `Sent SMS: Hi Mark, we sent you an introduction recently and we've not heard from you. Would you kindly give me a call on 9017 8400? With love, Emma @Vital partners`
    }
  ];

  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">


      {/* LEFT CARD */}
      <div className="md:col-span-4" >
        <div className="flex flex-col space-y-4">
          <div className=" bg-white rounded-xl p-5 flex flex-col items-center">
            <img className="w-40 h-40 rounded-full object-cover" src={userData.image} alt="Profile" />
            <h2 className="mt-4 text-lg font-semibold text-gray-800">
              {userData.name}
              <span className="text-xs text-light-green border-2 border-light-green px-2 py-0.5 rounded-lg ml-2">
                {userData.id}
              </span>
            </h2>
            <div className="mt-3 inline-flex justify-between items-center bg-teal-500 text-white text-md px-4 py-1 rounded-lg w-[130px]">
              <span>{userData.status}</span>
              <ChevronDownIcon className="w-4 h-4" />
            </div>

            {/* Contact Icons */}
            <div className="flex justify-center items-center mb-4 border-2 border-[#d1dee0] mt-3 rounded-lg px-3">
              {Object.entries(userData.contact).map(([key, value], index, array) => (
                <React.Fragment key={key}>
                  <span className="text-gray-500 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">{value}</span>
                  {index < array.length - 1 && (
                    <div className="h-8 w-px bg-gray-300 mx-2" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-4 border-t pt-4">
              {Object.entries(userData.social).map(([key, value]) => (
                <a key={key} href="#" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                  {value}
                </a>
              ))}
            </div>

            {/* Profile Information Table */}
            <div className="w-full">
              <table className="w-full text-sm text-gray-700">
                <tbody>
                  {profileFields.map((field, index) => (
                    <tr key={index}>
                      <td className="py-2 pr-4 text-gray-500 text-md font-light whitespace-nowrap">
                        {field.label}:
                      </td>
                      <td className="py-2 pl-35 font-semibold"  >{field.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
          <InfoCard
            title="Match Notes"
            content="Lorem ipsum dolor sit am consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />

        </div>
      </div>

      {/* MIDDLE CARD */}
      <div className="md:col-span-3 bg-white rounded-xl shadow-md p-4 h-[1018px] overflow-auto custom-scrollbar">


        <table className="w-full text-sm text-gray-800">
          <tbody>
            {detailedProfileFields.map((field, index) => (
              <tr key={index}>
                <td className="py-2 font-semibold text-md flex justify-end">{field.label}</td> {/* pr-4 adds padding to the right */}
                <td className="py-2 text-gray-500 text-md pl-2">{field.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>



      {/* RIGHT CARD */}
      <div className="md:col-span-5">
        <div className="flex flex-col space-y-4">
          {/* Contact After Section */}
          <div className="bg-white rounded-xl p-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between items-center p-2">
              <span className="text-pink-400 font-medium">Contact After:</span>
              <div className="flex gap-2">
                <span className="bg-pink-400 text-white text-sm px-5 py-1 rounded-lg">
                  Sun, 24 Nov, 2024
                </span>
                <div className="bg-gray-200 p-2 rounded-md">
                  <Edit2 size={15} />
                </div>
              </div>

            </div>
            <div className="flex justify-between items-center p-4">

              <div className="flex items-center space-x-2">
                <Flag size={18} />
                <span className="text-gray-500 font-medium">Flag for follow up</span>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isToggled}
                  onChange={toggleHandler}
                  className="sr-only" // Hide the checkbox itself
                />
                <div
                  className={`w-11 h-6 bg-gray-300 rounded-full ${isToggled ? 'bg-green-500' : 'bg-gray-300'}`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${isToggled ? 'translate-x-5' : 'translate-x-1'
                      }`}
                  />
                </div>
              </label>
            </div>
          </div>

          {/* John Notes Section */}
          <div className="bg-white rounded-xl text-sm text-gray-700">
            {/* Header */}
            <div className="flex justify-between items-center py-2 px-4">
              <h3 className="font-semibold text-lg text-gray-800">John Notes</h3>
              <div className="bg-gray-200 p-1 rounded-md">
                <PlusCircle size={17} />
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-300"></div>

            {/* Content */}
            <div className="p-4 mb-8 text-gray-500">
              <table className="w-full">
                <tbody>
                  {notesData.map((note, index) => (
                    <tr key={index}>
                      <td className="py-2">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className=" text-lg text-gray-400">{note.author}:</span>
                            {note.date && (
                              <span className="font-outfit text-gray-700 text-lg">{note.date}</span>
                            )}
                          </div>
                          <span className="text-gray-700 text-lg">{note.message}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <InfoCard
            title="Self Descriptions"
            content="Lorem ipsum dolor sit am consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit am consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit am consectetur adipiscing elit, eiusmod tempor incididunt ut."
          />

          <InfoCard
            title="Interest"
            content="Lorem ipsum dolor sit am consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit am consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit."
            showEdit={false}
          />

        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
