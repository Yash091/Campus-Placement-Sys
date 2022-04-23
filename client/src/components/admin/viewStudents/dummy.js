let id = 0;
const createData = (name, calories, fat, carbs, protein) => {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
};

export default [
    createData(
        "Frozen yoghurt sdafdfdssfdfsdsdsfdsfdsfsfdfsd sd fsdfsdfsdsfdsfd",
        159,
        6.0,
        24,
        4.0
    ),
    createData(
        "Ice cream sandwichdsfsdfsdf dfssdfsdafsad asffsd asfds df",
        237,
        9.0,
        37,
        4.3
    ),
    createData(
        "Eclairsdfas fdsdfsadfasfd fs dafsd fsdsfdafdsfds fsd sf dsfd asfd sfdasdfsfd",
        262,
        16.0,
        24,
        6.0
    ),
    createData(
        "Cupcakesad fasdffsdasfdfsdsfdfsdfsdfdfsdfsdfsdfsdfsdsfd",
        305,
        3.7,
        67,
        4.3
    ),
    createData(
        "Gingerbread af ffdsfds sfdfsa adfs afsdfsadfsdafdsfsadasfdfad s",
        356,
        16.0,
        49,
        3.9
    )
];
