const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, telefone: ${order.phoneNumber}, R.${order.address.street}, Nº:${order.address.number}, AP:${order.address.apartment} `);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.order.delivery.deliveryPerson = 'Luiz Silva'
    order.payment.total = 50
    const pizzas = Object.keys (order.order.pizza)
    const orderDrinks = Object.values (order.order.drinks.coke)
    const pizza1 = pizzas[0]
    const pizza2 = pizzas[1]
    const drink = orderDrinks[0]
    console.log(`Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de ${pizza1}, ${pizza2} e ${drink} é R$ ${order.payment.total},00`);
  }
  
  orderModifier(order);