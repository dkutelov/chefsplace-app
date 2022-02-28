const data = [
  {
    id: "1",
    name: "SUNSHINE CHILI ПИКАНТЕН СОС С ЧИЛИ И ЧЕСЪН 1 Л",
    images: [
      "http://chefsplace.bg/261-tm_thickbox_default/sunshine-chili-pikanten-sos-s-chili-i-chesn-1-l.jpg",
      "http://chefsplace.bg/262-tm_thickbox_default/sambal-manis-pikanten-sos-s-chili-i-soya-1-l.jpg",
      "http://chefsplace.bg/263-tm_thickbox_default/pang-gang-pikanten-sos-s-chili-i-domati-1-l.jpg",
      "http://chefsplace.bg/216-tm_thickbox_default/aziatsko-pesto-0340-kg.jpg",
      "http://chefsplace.bg/217-tm_thickbox_default/pasta-ot-skaridi-0340-kg.jpg",
    ],
    price: 1952,
    shortDescription:
      "Knorr автентична азиатска серия от продукти, за директна употреба и приложения за ястиия на уок, месо, нудълс и други. Пикантен сос с чили и чесън.",
    availabilityStatus: 1,
    description:
      "Азиатската серия е източник на вдъхновение за много готвачи, които търсят разнообразието в своята кухня.\n - Качествени съставки\n - Автентичен вкус\n - Отличен цвят и текстура",
  },
  {
    id: "2",
    name: "2 SUNSHINE CHILI ПИКАНТЕН СОС С ЧИЛИ И ЧЕСЪН 1 Л",
    images: [
      "http://chefsplace.bg/261-tm_thickbox_default/sunshine-chili-pikanten-sos-s-chili-i-chesn-1-l.jpg",
      "http://chefsplace.bg/262-tm_thickbox_default/sambal-manis-pikanten-sos-s-chili-i-soya-1-l.jpg",
      "http://chefsplace.bg/263-tm_thickbox_default/pang-gang-pikanten-sos-s-chili-i-domati-1-l.jpg",
      "http://chefsplace.bg/216-tm_thickbox_default/aziatsko-pesto-0340-kg.jpg",
      "http://chefsplace.bg/217-tm_thickbox_default/pasta-ot-skaridi-0340-kg.jpg",
    ],
    price: 2952,
    shortDescription:
      "Knorr автентична азиатска серия от продукти, за директна употреба и приложения за ястиия на уок, месо, нудълс и други. Пикантен сос с чили и чесън.",
    availabilityStatus: 1,
    description:
      "Азиатската серия е източник на вдъхновение за много готвачи, които търсят разнообразието в своята кухня.\n - Качествени съставки\n - Автентичен вкус\n - Отличен цвят и текстура",
  },
];

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    const product = data.find((p) => p.id === productId);
    if (!product) {
      reject("No such product");
    }

    resolve(product);
  });
};
