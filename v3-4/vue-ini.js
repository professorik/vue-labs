document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: "#app",
        data: {
            search: '',
            myList: [
                {
                    title: 'Java',
                    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
                },
                {
                    title: 'Golang',
                    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg'
                },
                {
                    title: 'C++',
                    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
                },
                {
                    title: 'Python',
                    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
                },
                {
                    title: 'Haskell',
                    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg'
                },
                {
                    title: 'Perl',
                    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg'
                },
                {
                    title: 'OCaml',
                    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg'
                },
                {
                    title: 'PostgreSQL',
                    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
                },
                {
                    title: 'JavaScript',
                    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                },
            ],
            isList: false,
        },
        computed: {
            filteredList() {
                return this.myList.filter(item => {
                    return item.title.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }
    });
});