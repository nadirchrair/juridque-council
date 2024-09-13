import { URL } from "../constants/Constants";
// External function for handling the registration API request
const registerUser = async (fullName, phone, profession, idNumber, state, password) => {
  try {
    const response = await fetch(`${URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        phone,
        profession,
        idNumber,
        state,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to register user');
    }

    const data = await response.json();
    console.log(data); // Output success message or additional data
    return data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error; // Rethrow to handle the error in the calling function
  }
};
 const AjouteConsultation = (formData) => {
  return fetch(`${URL}/consultations`, { // Replace with your actual API endpoint
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)  // Sending the entire form data object
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create consultation');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);  // Output success message from backend
      return data;
    })
    .catch(error => {
      console.error('Error during API call:', error); // Handle error
      throw error;
    });
};

 const submitConsultation = async (formData) => {
  try {
    const response = await fetch('/api/contact', { // Update to your actual API endpoint
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


const fetchLawyers  = async (page = 1, limit = 20, filters = {}) => {
  const { age, profession, religion, experience, nationality } = filters;

  // Construct query parameters based on filters
  const queryParams = new URLSearchParams({
    page,
    limit,
    ...(age && { age }),
    ...(profession && { profession }),
    ...(religion && { religion }),
    ...(experience && { experience }),
    ...(nationality && { nationality }),
  }).toString();

  try {
    const response = await fetch(`http://droit.onrender.com/api/consultantsLawyers?${queryParams}`, {
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




export { registerUser,AjouteConsultation,submitConsultation,fetchLawyers};