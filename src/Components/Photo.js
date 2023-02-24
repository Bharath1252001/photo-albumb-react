import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

function Photo() {
    const [singlePhoto, setSinglePhoto] = useState({});
  useEffect(() => {
    axios.get("https://picsum.photos/id/5/info")
    .then((res) => setSinglePhoto(res.data))
    .catch((err)=> console.log(err))
  }, []);

  return (
    <Container>
      <img
        src={singlePhoto.download_url}
        alt="enlarged-img"
        style={{
          width: "100%",
          height: "90vh",
          margin: "10px",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      />
    </Container>
  );
}

export default Photo;

