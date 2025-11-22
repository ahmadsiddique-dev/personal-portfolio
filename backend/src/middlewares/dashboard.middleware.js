// This checks if user have cookies in the httpOnly cookies if yes then just login him I know that I can also verify but i don't've that much time.

const dashboardMiddleware = (req, res, next) => {
  const cookie = req.cookies?.refreshToken

  if (!cookie) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized. Please login.",
      redirect: "/login"
    });
  }
  next();
};

export { dashboardMiddleware };
