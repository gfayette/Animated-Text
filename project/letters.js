const SPACE = [];

const A = [
    vec2(0, 0),
    vec2(1, 0),
    vec2(0, 1),

    vec2(1, 0),
    vec2(1, 1),
    vec2(0, 1),

    vec2(0, 1),
    vec2(1, 1),
    vec2(0, 2),

    vec2(1, 1),
    vec2(1, 2),
    vec2(0, 2),

    vec2(0, 2),
    vec2(1, 2),
    vec2(0, 3),

    vec2(1, 2),
    vec2(1, 3),
    vec2(0, 3),

    vec2(0, 3),
    vec2(1, 3),
    vec2(0, 4),

    vec2(1, 3),
    vec2(1, 4),
    vec2(0, 4),

    vec2(0, 4),
    vec2(1, 4),
    vec2(0, 5),

    vec2(1, 4),
    vec2(1, 5),
    vec2(0, 5),

    vec2(1, 4),
    vec2(1, 5),
    vec2(2, 5),

    vec2(1, 5),
    vec2(0, 5),
    vec2(1, 6),

    vec2(1, 5),
    vec2(1, 6),
    vec2(2, 5),

    vec2(1, 6),
    vec2(2, 5),
    vec2(2, 6),

    vec2(2, 6),
    vec2(2, 5),
    vec2(3, 6),

    vec2(2, 5),
    vec2(3, 6),
    vec2(3, 5),

    vec2(3, 6),
    vec2(3, 5),
    vec2(4, 5),

    vec2(2, 5),
    vec2(3, 5),
    vec2(3, 4),

    vec2(3, 5),
    vec2(4, 5),
    vec2(3, 4),

    vec2(4, 5),
    vec2(3, 4),
    vec2(4, 4),

    vec2(3, 4),
    vec2(4, 4),
    vec2(3, 3),

    vec2(4, 4),
    vec2(3, 3),
    vec2(4, 3),

    vec2(3, 3),
    vec2(4, 3),
    vec2(3, 2),

    vec2(4, 3),
    vec2(3, 2),
    vec2(4, 2),

    vec2(3, 2),
    vec2(4, 2),
    vec2(3, 1),

    vec2(4, 2),
    vec2(3, 1),
    vec2(4, 1),

    vec2(3, 1),
    vec2(4, 1),
    vec2(3, 0),

    vec2(4, 1),
    vec2(3, 0),
    vec2(4, 0),

    vec2(1, 2),
    vec2(1, 3),
    vec2(2, 2),

    vec2(1, 3),
    vec2(2, 2),
    vec2(2, 3),

    vec2(2, 2),
    vec2(2, 3),
    vec2(3, 3),

    vec2(2, 2),
    vec2(3, 2),
    vec2(3, 3),

];

const S = [
    vec2(0, 2),
    vec2(1, 2),
    vec2(1, 1),

    vec2(0, 2),
    vec2(0, 1),
    vec2(1, 1),

    vec2(0, 1),
    vec2(1, 1),
    vec2(1, 0),

    vec2(1, 1),
    vec2(1, 0),
    vec2(2, 0),

    vec2(1, 2),
    vec2(1, 1),
    vec2(2, 1),

    vec2(1, 1),
    vec2(2, 1),
    vec2(2, 0),

    vec2(2, 1),
    vec2(2, 0),
    vec2(3, 1),

    vec2(2, 0),
    vec2(3, 0),
    vec2(3, 1),

    vec2(3, 0),
    vec2(3, 1),
    vec2(4, 1),

    vec2(3, 1),
    vec2(4, 1),
    vec2(4, 2),
    
    vec2(3, 1),
    vec2(3, 2),
    vec2(4, 2),

    vec2(4, 2),
    vec2(3, 3),
    vec2(3, 2),

    vec2(2, 2),
    vec2(3, 1),
    vec2(3, 2),

    vec2(2, 3),
    vec2(3, 3),
    vec2(3, 2),

    vec2(2, 3),
    vec2(2, 2),
    vec2(3, 2),

    vec2(2, 4),
    vec2(2, 3),
    vec2(3, 3),

    vec2(1, 3),
    vec2(2, 3),
    vec2(2, 2),

    vec2(1, 4),
    vec2(1, 3),
    vec2(2, 3),

    vec2(1, 4),
    vec2(2, 4),
    vec2(2, 3),

    vec2(0, 4),
    vec2(1, 4),
    vec2(1, 3),

    vec2(1, 5),
    vec2(1, 4),
    vec2(2, 4),

    vec2(0, 4),
    vec2(1, 4),
    vec2(1, 5),

    vec2(0, 4),
    vec2(0, 5),
    vec2(1, 5),

    vec2(0, 5),
    vec2(1, 5),
    vec2(1, 6),

    vec2(1, 5),
    vec2(1, 6),
    vec2(2, 6),

    vec2(1, 5),
    vec2(2, 5),
    vec2(2, 6),

    vec2(2, 6),
    vec2(3, 6),
    vec2(3, 5),

    vec2(2, 6),
    vec2(2, 5),
    vec2(3, 5),

    vec2(2, 5),
    vec2(3, 5),
    vec2(3, 4),

    vec2(3, 6),
    vec2(3, 5),
    vec2(4, 5),

    vec2(3, 5),
    vec2(3, 4),
    vec2(4, 4),

    vec2(3, 5),
    vec2(4, 5),
    vec2(4, 4),
];

const D = [
    vec2(0, 0),
    vec2(1, 0),
    vec2(0, 1),

    vec2(1, 0),
    vec2(1, 1),
    vec2(0, 1),

    vec2(0, 1),
    vec2(1, 1),
    vec2(0, 2),

    vec2(1, 1),
    vec2(1, 2),
    vec2(0, 2),

    vec2(0, 2),
    vec2(1, 2),
    vec2(0, 3),

    vec2(1, 2),
    vec2(1, 3),
    vec2(0, 3),

    vec2(0, 3),
    vec2(1, 3),
    vec2(0, 4),

    vec2(1, 3),
    vec2(1, 4),
    vec2(0, 4),

    vec2(0, 4),
    vec2(1, 4),
    vec2(0, 5),

    vec2(1, 4),
    vec2(1, 5),
    vec2(0, 5),

    vec2(0, 5),
    vec2(1, 5),
    vec2(0, 6),

    vec2(1, 5),
    vec2(1, 6),
    vec2(0, 6),

    vec2(1, 5),
    vec2(2, 5),
    vec2(1, 6),

    vec2(2, 5),
    vec2(2, 6),
    vec2(1, 6),

    vec2(2, 5),
    vec2(3, 5),
    vec2(2, 6),

    vec2(3, 5),
    vec2(3, 6),
    vec2(2, 6),

    vec2(2, 5),
    vec2(3, 5),
    vec2(3, 4),

    vec2(3, 6),
    vec2(3, 5),
    vec2(4, 5),

    vec2(3, 5),
    vec2(4, 4),
    vec2(3, 4),

    vec2(4, 5),
    vec2(3, 5),
    vec2(4, 4),

    vec2(3, 4),
    vec2(4, 3),
    vec2(3, 3),

    vec2(4, 4),
    vec2(3, 4),
    vec2(4, 3),

    vec2(3, 3),
    vec2(4, 3),
    vec2(3, 2),

    vec2(4, 3),
    vec2(3, 2),
    vec2(4, 2),

    vec2(3, 2),
    vec2(4, 2),
    vec2(3, 1),

    vec2(4, 2),
    vec2(3, 1),
    vec2(4, 1),

    vec2(3, 2),
    vec2(3, 1),
    vec2(2, 1),

    vec2(3, 1),
    vec2(4, 1),
    vec2(3, 0),

    vec2(2, 0),
    vec2(3, 0),
    vec2(3, 1),

    vec2(2, 0),
    vec2(3, 1),
    vec2(2, 1),

    vec2(2, 0),
    vec2(2, 1),
    vec2(1, 1),

    vec2(1, 0),
    vec2(2, 0),
    vec2(1, 1),
];

const F = [
    vec2(0, 0),
    vec2(1, 0),
    vec2(0, 1),

    vec2(1, 0),
    vec2(1, 1),
    vec2(0, 1),

    vec2(0, 1),
    vec2(1, 1),
    vec2(0, 2),

    vec2(1, 1),
    vec2(1, 2),
    vec2(0, 2),

    vec2(0, 2),
    vec2(1, 2),
    vec2(0, 3),

    vec2(1, 2),
    vec2(1, 3),
    vec2(0, 3),

    vec2(0, 3),
    vec2(1, 3),
    vec2(0, 4),

    vec2(1, 3),
    vec2(1, 4),
    vec2(0, 4),

    vec2(0, 4),
    vec2(1, 4),
    vec2(0, 5),

    vec2(1, 4),
    vec2(1, 5),
    vec2(0, 5),

    vec2(0, 5),
    vec2(1, 5),
    vec2(0, 6),

    vec2(1, 5),
    vec2(1, 6),
    vec2(0, 6),

    vec2(1, 5),
    vec2(2, 5),
    vec2(1, 6),

    vec2(2, 5),
    vec2(2, 6),
    vec2(1, 6),

    vec2(2, 5),
    vec2(3, 5),
    vec2(2, 6),

    vec2(3, 5),
    vec2(3, 6),
    vec2(2, 6),

    vec2(3, 5),
    vec2(4, 5),
    vec2(3, 6),

    vec2(4, 5),
    vec2(4, 6),
    vec2(3, 6),

    vec2(1, 3),
    vec2(2, 3),
    vec2(1, 4),

    vec2(2, 3),
    vec2(2, 4),
    vec2(1, 4),

    vec2(2, 3),
    vec2(3, 3),
    vec2(2, 4),

    vec2(3, 3),
    vec2(3, 4),
    vec2(2, 4),
];