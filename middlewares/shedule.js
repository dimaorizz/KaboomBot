const monday = async ctx => {
    await ctx.reply(
`<b>### Понедельник ###</b>\n
<b>🕰 8-00 🕰</b>\n
<b>1. ***SKIPPED***</b>\n
<b>🕰 9-35 🕰</b>\n
<b>2. 1 подгруппа: ***SKIPPED***\n    2 подгруппа: АППЗ лаба (37)</b>\n
<b>🕰 11-25 🕰</b>\n
<b>3. Операционные системы (40/41)</b>\n
<b>🕰 12-55 🕰</b>\n
<b>4. Чис: Операционные системы (40/41)\n    Знам: Базы данных (37/41)</b>`,
    {parse_mode: 'HTML'}
    );
};

const tuesday = async ctx => {
    await ctx.reply(
`<b>### Вторник ###</b>\n
<b>🕰 8-00 🕰</b>\n
<b>1. 1 подгруппа: АППЗ - лаба (37)\n    2 подгруппа: Организация и функц. ЕВМ - лаба (40)</b>\n
<b>🕰 9-35 🕰</b>\n
<b>2. Базы данных - лаба (37/41)</b>\n
<b>🕰 11-25 🕰</b>\n
<b>3. БЖД (250, 2 корпус)</b>\n`,
    {parse_mode: 'HTML'}
    );
};

const wednesday = async ctx => {
    await ctx.reply(
`<b>### Среда ###</b>\n
<b>🕰 8-00 🕰</b>\n
<b>1. ***SKIPPED***</b>\n
<b>🕰 9-35 🕰</b>\n
<b>2. ***SKIPPED***</b>\n
<b>🕰 11-25 🕰</b>\n
<b>3. Организация и функц. ЕВМ - лекция (62)</b>\n
<b>🕰 12-55 🕰</b>\n
<b>4. АППЗ - лекция (62)</b>\n
`,
    {parse_mode: 'HTML'}
    );
};

const thursday = async ctx => {
    await ctx.reply(
`<b>### Четверг ###</b>\n
<b>🕰 8-00 🕰</b>\n
<b>1. ***SKIPPED***</b>\n
<b>🕰 9-35 🕰</b>\n
<b>2. Операционные системы - лекция (50)</b>\n
<b>🕰 11-25 🕰</b>\n
<b>3. Базы данных - лекция (50)</b>\n
<b>🕰 12-55 🕰</b>\n
<b>4.\n1 подгруппа: Орган. и функц. ЕОМ - лаба (41)\n2 подгруппа: ***SKIPPED***</b>\n
`,
    {parse_mode: 'HTML'}
    );
};

const friday = async ctx => {
    await ctx.reply(
`<b>### Пятница ###</b>\n
<b>🕰 8-00 🕰</b>\n
<b>1 подгруппа: Орган. и функц. ЕОМ - лаба (40)\n2 подгруппа:\nЧислитель : АППЗ - лаба (37)\nЗнаменатель: ***SKIPPED***\n</b>
<b>🕰 9-35 🕰</b>\n
<b>2. Англ(508/507, 6 корпус)</b>\n
<b>🕰 11-25 🕰</b>\n
<b>1 подгруппа:\nЧислитель : АППЗ - лаба (37)\nЗнам: ***SKIPPED***\n2 подгруппа: Организация и функц. ЕВМ - лаба (40)</b>\n
`,
    {parse_mode: 'HTML'}
    );
};

const saturday = async ctx => {
    await ctx.reply(`<b>Бля, а может еще и в воскресенье учиться будем? а? а? а?</b>`, {parse_mode: 'HTML'});
}

module.exports = {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
}
