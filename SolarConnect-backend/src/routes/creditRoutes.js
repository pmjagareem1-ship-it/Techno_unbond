import {Router} from "express"; 
import Credit from "../models/Credit.js";
 import {auth} from "../middleware/authMiddleware.js";
 
  const r=Router(); 
  const get=uid=>Credit.findOneAndUpdate({user:uid},{$setOnInsert:{user:uid}},{new:true,upsert:true});
   r.get("/",auth,async(q,s)=>s.json(await get(q.user.id)));
    r.post("/earn",auth,async(q,s)=>{const c=await get(q.user.id),a=Math.max(0,+q.body.amount||0);
        c.available+=a;c.history.push({type:"earn",amount:a,description:q.body.description||"Eligible reward"});
        await c.save();s.json(c)});
         r.post("/use",auth,async(q,s)=>{const c=await get(q.user.id),a=Math.max(0,+q.body.amount||0);
            if(a>c.available)return s.status(400).json({message:"Insufficient credits"});
            c.available-=a;
            c.used+=a;
            c.history.push({type:"use",amount:a,description:q.body.description||"Eligible purchase/service"});
            await c.save();s.json(c)});
             export default r;
