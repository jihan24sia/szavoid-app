const names = ["Ahmad Subarjo", "Siti Aminah", "Budi Setiawan", "Putri Rahayu", "Jihan Zahra", "Dedi Kurniawan", "Bambang Pamungkas", "Ani Yudhoyono"];

export const customers = Array.from({ length: 30 }, (_, i) => {
    const name = names[i] || `Customer ${i + 1}`;
    
    return {
        id: `CUST-${(i + 1).toString().padStart(3, '0')}`,
        name: name,
        email: name.toLowerCase().replace(/\s/g, '') + "@mail.com",
        phone: `08123${Math.floor(100000 + Math.random() * 900000)}`,
        // --- LOGIKA BARU: Kalau i genap jadi VIP, kalau ganjil jadi Reguler ---
        status: i % 2 === 0 ? "VIP" : "Reguler", 
        total_orders: Math.floor(Math.random() * 50) + 1
    };
});