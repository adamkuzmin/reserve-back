import client from "../../../sanity/client";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      let body = await JSON.parse(req.body);

      try {
        let data = {};

        await client.create({ _type: "projects", ...body }).then((res) => {
          data = res;
        });

        res.status(200).json({ data });
      } catch (err) {
        console.log(err);
        res.status(500);
      }

      break;
  }
}
