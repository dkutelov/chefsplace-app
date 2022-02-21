import { AvailabilityStatus, Product } from "../../../types/Product";

export const products: Product[] = [
  {
    id: "1",
    name: "SUNSHINE CHILI ПИКАНТЕН СОС С ЧИЛИ И ЧЕСЪН 1 Л",
    images: [
      "http://chefsplace.bg/261-tm_thickbox_default/sunshine-chili-pikanten-sos-s-chili-i-chesn-1-l.jpg",
    ],
    price: 1952,
    shortDescription:
      "Knorr автентична азиатска серия от продукти, за директна употреба и приложения за ястиия на уок, месо, нудълс и други. Пикантен сос с чили и чесън.",
    availabilityStatus: AvailabilityStatus.OnStock,
  },
  {
    id: "2",
    name: "SAMBAL MANIS ПИКАНТЕН СОС С ЧИЛИ И СОЯ 1 Л",
    images: [
      "http://chefsplace.bg/262-tm_thickbox_default/sambal-manis-pikanten-sos-s-chili-i-soya-1-l.jpg",
    ],
    price: 1952,
    shortDescription:
      "Knorr автентична азиатска серия от продукти, за директна употреба и приложения за ястиия на уок, дипове, месо, нудълс и други. Пикантен сос с чили и соя.",
    availabilityStatus: AvailabilityStatus.OnStock,
  },
  {
    id: "3",
    name: "PANG GANG ПИКАНТЕН СОС С ЧИЛИ И ДОМАТИ 1Л",
    images: [
      "http://chefsplace.bg/263-tm_thickbox_default/pang-gang-pikanten-sos-s-chili-i-domati-1-l.jpg",
    ],
    price: 1952,
    shortDescription:
      "Knorr автентична азиатска серия от продукти, за директна употреба и приложения за ястиия на уок, дипове, месо, нудълс и други. Пикантен сос с чили и домати.",
    availabilityStatus: AvailabilityStatus.OnStock,
  },
  {
    id: "4",
    name: "АЗИАТСКО ПЕСТО 0.340 КГ",
    images: [
      "http://chefsplace.bg/216-tm_thickbox_default/aziatsko-pesto-0340-kg.jpg",
    ],
    price: 1090,
    shortDescription:
      "Невероятен джинджифилов вкус, текстура и свежест в един pet буркан, за вашето шеф въобръжение. Концентриран продукт, използвайте в умерени количества, заради високата концентрация на подправки и сол.",
    availabilityStatus: AvailabilityStatus.OutOfStock,
  },
  {
    id: "5",
    name: "ПАСТА ОТ СКАРИДИ 0.340 КГ",
    images: [
      "http://chefsplace.bg/217-tm_thickbox_default/pasta-ot-skaridi-0340-kg.jpg",
    ],
    price: 1796,
    shortDescription:
      "Паста от скариди е концентриран продукт подходящ както за студена така и за топла кухня. В комбинация със сосове за риби, миди и паста, така и за салатни дресинги с морски деликатеси. Перфектният начин да подчертаете аромата на скариди във вашата чиния.",
    availabilityStatus: AvailabilityStatus.OnStock,
  },
];
