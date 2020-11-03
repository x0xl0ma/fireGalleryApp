import { motion } from "framer-motion";
import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImagesGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            layout
            whileHover={{ opacity: 1 }}
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={doc.url}
              alt=""
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImagesGrid;
