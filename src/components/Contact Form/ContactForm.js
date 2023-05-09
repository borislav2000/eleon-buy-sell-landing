import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { CountryDropdown } from "react-country-region-selector";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = (props) => {
  const [country, setCountry] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    country: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstname: "",
    lastname: "",
    country: "",
    phone: "",
    email: "",
  });

  const validateForm = () => {
    let errors = {};
    if (formData.firstname === "") {
      errors.firstname = "First name is required";
    }

    if (formData.lastname === "") {
      errors.lastname = "Last name is required";
    }

    if (country === "") {
      errors.country = "Country is required";
    }
    if (formData.phone === "") {
      errors.phone = "Phone number is required";
    }
    if (formData.email === "") {
      errors.email = "Email is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return false;
    }

    return true;
  };

  const saveData = async () => {
    try {
      await axios.post(
        "https://sheet.best/api/sheets/d72b56c6-f144-4362-8fb8-d8d36409cb36",
        formData
      );
    } catch (err) {
      console.error(err);
    }
  };

  const showToastSuccess = () => {
    toast.success(
      "You've successfully registered! Expect a call from us soon!",
      {
        position: "top-right",
        hideProgressBar: true,
        autoClose: 5000,
      }
    );
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const isFormvalid = validateForm();

    if (isFormvalid) {
      saveData(formData);
      showToastSuccess();
      setFormData({
        firstname: "",
        lastname: "",
        country: "",
        phone: "",
        email: "",
      });
      setCountry("");
      setFormErrors({
        firstname: "",
        lastname: "",
        country: "",
        phone: "",
        email: "",
      });
    }
  };

  const countryChangeHandler = (val) => {
    const selectedCountry = val;
    setCountry(selectedCountry);
    formData.country = selectedCountry;
    formErrors.country = "";
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setFormErrors({ ...formErrors, [event.target.name]: "" });
  };
  return (
    <form className="mt-6 w-full max-w-xs" onSubmit={handleSubmitForm}>
      <Input
        labelText="First Name"
        type="text"
        id="firstname"
        name="firstname"
        value={formData.firstname}
        onChange={handleInputChange}
      />
      {formErrors.firstname && (
        <div className="text-sm text-[#DC2626]">{formErrors.firstname}</div>
      )}
      <Input
        labelText="Last Name"
        type="text"
        id="lastname"
        name="lastname"
        value={formData.lastname}
        onChange={handleInputChange}
      />
      {formErrors.lastname && (
        <div className="text-sm text-[#DC2626]">{formErrors.lastname}</div>
      )}
      <div className="mb-2">
        <label className="block text-sm font-inter font-semibold text-[#151A1C]">
          Country
        </label>

        <CountryDropdown
          value={country}
          onChange={countryChangeHandler}
          classes="w-full mt-2 rounded-md border border-[#CECECE] focus:ring-gold focus:border-gold focus:outline-none p-2"
        />
      </div>
      {formErrors.country && (
        <div className="text-sm text-[#DC2626]">{formErrors.country}</div>
      )}
      <Input
        labelText="Phone number"
        type="text"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
      />
      {formErrors.phone && (
        <div className="text-sm text-[#DC2626]">{formErrors.phone}</div>
      )}
      <Input
        labelText="Email"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {formErrors.email && (
        <div className="text-sm text-[#DC2626]">{formErrors.email}</div>
      )}
      <div className="mb-2">
        <Button className="font-inter font-medium bg-test rounded-md px-5 py-3 w-full hover:bg-white mt-2 ">
          Start earning
        </Button>
        <ToastContainer />
      </div>
    </form>
  );
};

export default ContactForm;
