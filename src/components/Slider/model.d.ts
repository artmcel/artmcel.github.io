export interface SliderProps {
    data: SliderItem[];
}

interface SliderItem {
    id: string;
    title: string;
    description: string;
    link: string;
    imagen: string;
}