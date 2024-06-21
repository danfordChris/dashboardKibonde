import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`
    CREATE TABLE products (
    id INT(255) NOT NULL AUTO INCREMENT,
    name VARCHAR(255) NOT NULL,
    unit_cost INT(50) NOT NULL,
    amount INT(50) NOT NULL,
    total_cost INT(50) NOT NULL,
    price INT(50) NOT NULL,
    PRIMARY KEY(id)
    );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (e) {
    console.log("Error in Creating Database");
    return NextResponse.json({ e }, { status: 500 });
  }
}
