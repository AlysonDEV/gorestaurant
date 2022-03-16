import { useEffect, useState } from "react";

import Header from "../../components/Header";
import api from "../../service/api";

interface propsFood {
  id: number,
  name: string,
  description: string,
  price: string,
  avaliable: boolean,
  image: string
}

type propsFoodInput = Omit<propsFood, 'id' | 'avaliable'>

interface propsFoods {
  foods: propsFood[]
}

function Dashboard(){
  const [foods, newFoods] = useState<propsFood[]>([])
  const [editingFood, newEditingFood] = useState<propsFood>({} as propsFood)
  const [modalOpen, newModalOpen] = useState(false)
  const [editModalOpen, newEditModalOpen] = useState(false)

  useEffect(() => {
    async function loadFood(): Promise<void>{
      const response = await api.get('/')
      newFoods(response.data)
    }

    loadFood()
  }, []
  )
  
  console.log(foods)

  async function handleAddFood(
    food: propsFoodInput
  ): Promise<void> {
    try {
      const {name, description, image, price} = food

      const response = await api.post('', {
        name,
        description,
        image,
        price,
        avaliable: true
      })

      newFoods(state => [...state, response.data])
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <Header />
  )
}

export default Dashboard