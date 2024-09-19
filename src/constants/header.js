import { MapPinIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";

const subnav = [
    {
        name: "Chọn rạp",
        icon: MapPinIcon
    },
    {
        name: "Khuyến mãi",
    },
    {
        name: "Giới thiệu",
        Link: "/about", // Dẫn đến trang giới thiệu
    }
    
];

const listTheater = [
    "Cinestar Quốc Thanh (TPHCM)",
    "Cinestar Hai Bà Trưng (TPHCM)",
    "Cinestar Sinh viên (Bình Dương)",
    "Cinestar Huế",
    "Cinestar Đà Lạt",
    "Cinestar Lâm Đồng",
    "Cinestar Mỹ Tho",
    "Cinestar Kiên Giang",
]

export { subnav, listTheater };
