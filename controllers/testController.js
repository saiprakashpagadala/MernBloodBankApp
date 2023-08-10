export const testController = (req, res) => {
  res.status(200).json({
    message: "Welcome to test route",
    success: true,
  });
};