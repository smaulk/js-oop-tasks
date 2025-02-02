const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(!!dic, true);
        });

        it('добавление слова и получение определения', () => {
            const dic = new core.Dictionary();
            dic.addWord('apple', 'яблоко');
            assert.strictEqual(dic.getDefinition('apple'), 'яблоко');
        });

        it('попытка получения определения для отсутствующего слова', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(dic.getDefinition('dog'), 'Слово не найдено в словаре');
        });

        it('удаление слова и проверка отсутствия', () => {
            const dic = new core.Dictionary();
            dic.addWord('apple', 'яблоко');
            dic.removeWord('apple');
            assert.strictEqual(dic.getDefinition('apple'), 'Слово не найдено в словаре');
        });

        it('попытка добавления некорректных значений', () => {
            const dic = new core.Dictionary();
            dic.addWord(42, 'яблоко');
            dic.addWord('apple', 42);
            dic.addWord('', 'яблоко');
            dic.addWord('apple', '');
            dic.addWord(undefined, 'яблоко');
            dic.addWord('apple', undefined);

            assert.strictEqual(dic.getDefinition(42), 'Слово не найдено в словаре');
            assert.strictEqual(dic.getDefinition('apple'), 'Слово не найдено в словаре');
            assert.strictEqual(dic.getDefinition(''), 'Слово не найдено в словаре');
            assert.strictEqual(dic.getDefinition(undefined), 'Слово не найдено в словаре');
        });
    });
});