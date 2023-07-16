# Как настроить React проект с помощью Vite

##### Чтобы следовать этому руководству, вам понадобится следующее:
* Установленный Node.js ( 12.2.0 и выше )
* Установленный ГЛОБАЛЬНО менеджер пакетов Yarn ( 1.22.0 и выше ), установить можно прописав `npm install -g yarn`

## Короткая версия:

* открываем папку где хотим пилить проект в IDE и кастуем `yarn create vite .` 
(точка означает что проект будет в данной папке)
* устанавливаем зависимости `yarn`
* запускаем сервер для разработки `yarn run dev`

##  Полная версия:

#### Шаг 1 — Создание проекта Vite
* Запускаем терминал, вводим
    `yarn create vite`
    <p style="text-align: justify">Команда запустит исполняемый файл Vite из удаленного npm репозитория. Он настроит необходимые инструменты для создания локальной среды разработки React. Наконец, откроется меню командной строки для настроек проекта и типа языка. После завершения скрипта будет предложено ввести имя проекта:</p>
*  Вводим название нашего проекта
`Output`
`yarn create v1.22.10`
`[1/4] Resolving packages...`
`[2/4] Fetching packages...`
`[3/4] Linking dependencies...`
`[4/4] Building fresh packages...`
`success Installed "create-vite@2.9.0" with binaries:`
`- create-vite`
`- cva`
`? Project name: » vite-project`
* Выбираем фреймворк React
`Output`
`? Select a framework: » - Use arrow-keys. Return to submit.`
`Vanilla`
`Vue`
`> React`
`Preact`
`Lit`
`Svelte`
`Others`
* Выбираем тип языка JavaScript
`Output`
`? Select a variant: » - Use arrow-keys. Return to submit.`
`> JavaScript`
`TypeScript`
`JavaScript + SWC`
`TypeScript + SWC`
* <p style="text-align: justify">После настройки создастся новая папка с вашим проектом. Затем Vite предложит установить зависимости. 
* Переходим в папку проекта 
`cd my-project`</p>
* Устанавливаем зависимости
`yarn`

#### Шаг 2 — Запуск сервера разработки
* Запускаем сервер для разработки
`yarn run dev`

#### Шаг 3 — Создание билда
* Команда создаст новую папку dist с уменьшенными исходными файлами, которые вы можете развернуть на своем сервере.
`yarn run build`

    
