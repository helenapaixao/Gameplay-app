import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xKsVMoo2EGGk6x57P8c8tuT42a3F7AQcHRffg-JBML6USYEIuWhS02VKezJ4U6aDQqU&usqp=CAUFuploads%2F2017%2F11%2Fdiscord-logo-2-1.png&imgrefurl=https%3A%2F%2Fen.logodownload.org%2Fdiscord-logo%2F&tbnid=DTunYMj5VSY2hM&vet=10CAQQxiAoAGoXChMI-JLAn_6P-gIVAAAAAB0AAAAAEAY..i&docid=w_hpOh5glrkjGM&w=4096&h=3105&itg=1&q=discord%20icon%20png&ved=0CAQQxiAoAGoXChMI-JLAn_6P-gIVAAAAAB0AAAAAEAY";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
