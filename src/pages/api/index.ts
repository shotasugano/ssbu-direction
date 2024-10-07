import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { character, move } = req.query;

  try {
    // Fetch data from Supabase
    const { data, error } = await supabase
      .from("smash_table")
      .select("*")
      .eq("character", character)
      .eq("move", move)
      .single();

    if (error) {
      if (error.code === "PGRST404") {
        return res
          .status(404)
          .json({ error: "ごめんなさい、データが見つかりませんでした" });
      }
    }
    if (!data) {
      return res
        .status(404)
        .json({ error: "ごめんなさい、データが見つかりませんでした" });
    }

    // Return the fetched data
    res.status(200).json(data);
  } catch (error: unknown) {
    res.status(500).json({ error: "An unknown error occurred" });
    console.error(error);
  }
}
