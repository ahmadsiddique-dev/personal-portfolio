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
