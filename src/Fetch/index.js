import { URL } from "../constants/Constants";

const AjouteConsultation = async (formData) => {
  try {
    const response = await fetch(`${URL}/company/`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Send form data
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    const data = await response.json();
    return data; // Return response data
  } catch (error) {
    console.error('Error submitting consultation:', error);
    throw error; // Re-throw the error to be caught in the component
  }
};


const submitConsultation = async (formData) => {
  try {
    const response = await fetch(`${URL}/consultation/`, { // Update to your actual API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Send form data
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    const data = await response.json();
    return data; // Return response data
  } catch (error) {
    console.error('Error submitting consultation:', error);
    throw error; // Re-throw the error to be caught in the component
  }
};

const fetchLawyers = async (filters = {}) => {
  const { age, profession, religion, experience, nationality, searchTerm } = filters;

  // Construct query parameters based on filters
  const queryParams = new URLSearchParams({
    ...(age && { age }),
    ...(profession && { profession }),
    ...(religion && { religion }),
    ...(experience && { experience }),
    ...(nationality && { nationality }),
    ...(searchTerm && { searchTerm }), // Include search term if provided
  }).toString();

  try {
    const response = await fetch(`http://droit.onrender.com/api/consultantsLawyers/NotAuth`, {
      method: 'GET', // POST method for sending pagination in body
     
   //   body: JSON.stringify({ page, limit }), // Send page and limit in body
    });

    if (!response.ok) {
      throw new Error('Failed to fetch lawyers');
    }

    const data = await response.json();
    return data; // Return the fetched data

  } catch (error) {
    throw new Error(error.message); // Rethrow the error to handle it in the component
  }
};



const RechercheOffer=async (search)=>{
  try {
    const response = await fetch(`${URL}/offers?filterOn=description&filterQuery=${search}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch offers');
    }

    const data = await response.json();
    return data; // Return the fetched data

  } catch (error) {
    throw new Error(error.message); // Rethrow the error to handle it in the component
  }
}



// Function to register a user
const registerUser = async (
  firstName,
  lastName,
  professionalCardNumber,
  judicialCouncil, // This should be the ID
  role,            // This should also be the ID
  numberPhone,
  email,
  password
) => {
  try {
    const response = await fetch("https://droit.onrender.com/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        professionalCardNumber,
        judicialCouncil, // Send as ID
        role,            // Send as ID
        numberPhone,
        email,
        password
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Server Error:", errorData);
      throw new Error("Failed to register user");
    }

    return await response.json();
  } catch (error) {
    console.error("Error in registerUser:", error);
    throw error;
  }
};

// Function to fetch judicial council data
const fetchJudicialCouncil = async () => {
  try {
    const response = await fetch(`${URL}/DataInserted/judicialCouncil`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },}); // Adjust the endpoint as needed
    if (!response.ok) {
      throw new Error("Failed to fetch judicial council data");
    }
    return await response.json(); // Assuming the API returns JSON data
  } catch (error) {
    console.error("Error fetching judicial council data:", error);
    throw error;
  }
};

// Function to fetch available roles
const fetchRoles = async () => {
  try {
    const response = await fetch(`${URL}/DataInserted/Role`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },}); // Adjust the endpoint as needed
    if (!response.ok) {
      throw new Error("Failed to fetch roles data");
    }
    return await response.json(); // Assuming the API returns JSON data
  } catch (error) {
    console.error("Error fetching roles data:", error);
    throw error;
  }
};


export { registerUser,AjouteConsultation,submitConsultation,fetchLawyers,fetchJudicialCouncil,fetchRoles};