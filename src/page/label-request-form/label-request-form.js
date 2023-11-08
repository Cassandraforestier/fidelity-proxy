import React, { useState } from "react";
import axios from "axios";

const LabelRequestForm = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [materials, setMaterials] = useState("");
  const [process, setProcess] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [organizationId, setOrganizationId] = useState(""); // Ajoutez l'ID de l'organisation
  const [comment, setComment] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Créez un objet avec les données du formulaire
    const labelRequestData = {
      organizationId,
      productId: {
        name: productName,
        description: productDescription,
        price: productPrice,
      },
      comment,
      materials,
      process,
      images: selectedImages,
    };

    try {
      // Envoyez les données au backend (remplacez l'URL par l'URL de votre backend)
      const response = await axios.post("http://localhost:4000/labelRequest", labelRequestData);
      console.log("Demande de labélisation soumise avec succès.", response.data);
    } catch (error) {
      console.error("Erreur lors de la soumission de la demande de labélisation.", error);
    }
  };

  return (
    <div>
      <h1>Formulaire de demande de labélisation</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Nom du produit :</label>
          <input required type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </div>
        <div>
          <label>Description du produit :</label>
          <input value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
        </div>
        <div>
          <label>Prix du produit :</label>
          <input required type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
        </div>
        <div>
          <label>Matériaux de fabrication :</label>
          <input value={materials} onChange={(e) => setMaterials(e.target.value)} />
        </div>
        <div>
          <label>Procédures :</label>
          <input value={process} onChange={(e) => setProcess(e.target.value)} />
        </div>
        <div>
          <label>Images du produit :</label>
          <input required type="file" multiple onChange={(e) => setSelectedImages([...e.target.files])} />
        </div>
        <div>
          <label>Organisation ID :</label>
          <input required type="text" value={organizationId} onChange={(e) => setOrganizationId(e.target.value)} />
        </div>
        <div>
          <label>Commentaire :</label>
          <input value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>
        <button type="submit">Soumettre la demande de labélisation</button>
      </form>
    </div>
  );
};

export default LabelRequestForm;
