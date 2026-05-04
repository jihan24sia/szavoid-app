 const newOrderData = {
      id: `ORD-00${Math.floor(Math.random() * 1000)}`, // Generate ID acak
      customer: customerName,
      service: currentService.name,
      weight: `${weight}kg`,
      total: `Rp ${subtotal.toLocaleString('id-ID')}`,
      status: "Antri",
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    };