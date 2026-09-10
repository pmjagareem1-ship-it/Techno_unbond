import jwt from "jsonwebtoken";
export function auth(req,res,next){const h=req.headers.authorization;if(!h?.startsWith("Bearer "))return res.status(401).json({message:"Authentication required"});try{req.user=jwt.verify(h.slice(7),process.env.JWT_SECRET);next()}catch{res.status(401).json({message:"Invalid or expired token"})}}
export function adminOnly(req,res,next){if(req.user?.role!=="admin")return res.status(403).json({message:"Admin access required"});next()}
