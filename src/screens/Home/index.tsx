import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { styles } from "./styles";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";



export function Home() {

  const [category, setCategory] = useState("");

  const navigation = useNavigation()

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 ás 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 ás 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida",
    },
  ];

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails')
  }


  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate')
  }


  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
        hasCheckBox={true}
      />
      <ListHeader title="Partidas agendadas" subtitle="Total 6" />
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Appointment 
        data={item}
        onPress={handleAppointmentDetails}
        />}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{paddingBottom: 69}}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
      />
    </Background>
  );
}
