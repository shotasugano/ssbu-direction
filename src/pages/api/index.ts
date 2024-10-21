// import { NextApiRequest, NextApiResponse } from "next";
// import { supabase } from "../../../utils/supabaseClient";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   console.log("req.query:", req.query);
//   const { character, move } = req.query;

//   try {
//     // Fetch data from Supabase
//     const { data, error } = await supabase
//       .from("smash_table")
//       .select("*")
//       .eq("character", character)
//       .eq("move", move)
//       .single();

//     if (error) {
//       // FIXME:
//       console.error("Supabase error:", error);
//       if (error.code === "PGRST404") {
//         return res
//           .status(404)
//           .json({ error: "ごめんなさい、データが見つかりませんでした" });
//       }
//     }
//     if (!data) {
//       return res
//         .status(404)
//         .json({ error: "ごめんなさい、データが見つかりませんでした" });
//     }

//     // Return the fetched data
//     return res.status(200).json(data);
//   } catch (error: unknown) {
//     // FIXME:
//     console.error("Supabase error:", error);
//     return res.status(500).json({ error: "An unknown error occurred" });
//   }
// }
