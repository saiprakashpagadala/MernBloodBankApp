export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    console.log(e, email, password, role, "login");
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone,
  organisationName,
  address,
  hospitalName,
  website
) => {
  e.preventDefault();
  try {
    console.log(
      e,
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website,
      "register"
    );
  } catch (error) {
    console.log(error);
  }
};
