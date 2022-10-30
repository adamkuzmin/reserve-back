import client from "../../../sanity/client";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      let body = await JSON.parse(req.body);

      try {
        let data = {};

        const { _id } = body;

        await client
          .delete({
            query: `*[_type == "projects" && _id == "${_id}"]`,
          })
          .then((e) => {
            data = { result: true };
          });

        res.status(200).json({ data });
      } catch (err) {
        console.log(err);
        res.status(500);
      }

      break;
  }
}
