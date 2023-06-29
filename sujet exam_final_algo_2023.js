// EXO 1 :
// Écrivez une fonction qui prend deux nombres en argument
// et retourne vrai si le premier est supérieur au deuxieme ou faux dans le cas contraire
// f(4,2) retourne true
// f(4,7) retourne false

function exo1(ar1, ar2) {
    return ar1 > ar2
}
// console.log(exo1(3, 2));

// EXO 2 :
// Implémentez une fonction pour inverser une chaîne de caractères.
// Vous ne devez pas utiliser la méthode reverse
// f("test") retourne "tset"

function exo2(str) {
    let new_str = "";
    for (let index = str.length - 1; index >= 0; index--) {
        new_str += str[index]
    }
    return new_str;
}
// console.log(exo2("hello"))


// EXO 3 :
// Un palindrome est un mot qui se lit dans les deux sens ("kayak")
// Écrivez un algorithme pour vérifier si une chaîne de caractères donnée est un palindrome.
// f("kayak") retourne true
// f("test") retourne false

function exo3(palindrome) {
    let result_of_rever = exo2(palindrome);
    return result_of_rever === palindrome
}
// console.log(exo3("radar"));


// EXO 4 :
// Créez une fonction qui retourne le factoriel d'un nombre passé en argument.
// f(5) retourne 120

function exo4(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
// console.log(exo4(10));

// EXO 5 :
// Implémentez une fonction pour vérifier si un nombre est premier.
// Un nombre premier est un nombre qui est divisible uniquement par 1 ou par lui même
// f(11) retourne true
// f(20) retourne false
function exo5(num) {
    let list_of_primary_number = [2, 3, 5, 7, 11, 13, 17];
    for (let i = 0; i < list_of_primary_number.length; i++) {
        if (Number.isInteger(num / list_of_primary_number[i])) {
            return false
        }
    }
    return true
}
// console.log(exo5(103));


// EXO 6 :
// Écrire une fonction qui renvoie le plus grand nombre dans un tableau.
// Vous ne devez pas utiliser de boucle

function exo6(tab) {
    return Math.max.apply(null, tab);
}
// console.log(exo6([10, 20, 63, 120, 80, 67, 85, 349]));

// EXO 7 :
// Un anagramme est une phrase composée des même lettres qu'une autre phrase dans un ordre différent
// "La crise économique" et "Le scénario comique" sont des anagrammes
// Écrivez une fonction retourne vrai si deux chaînes de caractères sont des anagrammes l'une de l'autre ou faux dans le cas contraire.
// https://fr.wikipedia.org/wiki/Anagramme

function exo7(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
        if (!str2.includes(str1[i])) {
            return false
        }
    }
    return true
}
// console.log(exo7("La crise économique", "Le scénario comique"));

// EXO 8 :
// Écrivez une fonction pour déterminer si une chaîne de caractères donnée ne contient que des caractères uniques.
// f("test") retourne faux car le caractère t est présente 2 fois
// f("hopital") retourne vrai car chaque caractère est présent 1 seule fois
// f("Test") retourne vrai car chaque caractère est présent 1 seule fois (t n'est pas pareil que T)

function exo8(str) {
    let stop = 0;
    while (stop < str.length) {
        let cont = 0;
        let lettres = str[stop];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === lettres) {
                cont++;
                if (cont === 2) {
                    return false
                }
            }
        }
        stop++;
    }
    return true
}
// console.log(exo8("chat"));

// EXO 9 :
// Implémentez une fonction qui retourne le deuxieme plus grand élément d'un tableau de nombre entier.
// f([5,6,2,9,23]) retourne 9 car 23 est le plus grand et 9 est le deuxieme plus grand

function exo9(tab) {
    if (tab.length > 2) {
        let plus_grand = [0];
        let desième_plus_grand = [1];
        for (let i = 0; i < tab.length; i++) {
            if (tab[i] > plus_grand) {
                desième_plus_grand = plus_grand
                plus_grand = tab[i];
            } else if (tab[i] > desième_plus_grand) {
                desième_plus_grand = tab[i];
            }
        }
        return desième_plus_grand
    }
}
// console.log(exo9([10, 12, 8, 9, 8, 5]));

// EXO 10 :
// Écrivez une fonction pour calculer la somme de tous les nombres pairs d'un tableau.
// f([3,2,6]) retoune 8 (2+6)

function exo10(tab) {
    let result = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] % 2 === 0) {
            result += tab[i]
        }
    }
    return result
}
// console.log(exo10([1, 2, 3, 5, 6, 10]));

// EXO 11 :
// Créez une fonction pour inverser l'ordre des mots dans une phrase.
// Vous pouvez utliser les méthode disponible dans les prototypes String et Array
// f("bonjour je vais bien") affiche "bien vais je bonjour"
// la fonction ne retourne rien

function exo11(str) {
    return str.split(' ').reverse().join().replaceAll(',', ' ');
}
// console.log(exo11("boujour je vais bien"));

// EXO 12 :
// Implémentez une fonction pour supprimer toutes les occurrences d'un élément donné d'un tableau.
// f([3,5,7,3,1,3,5], 3) retourne  [5,7,1,5] car on a supprimer tout les 3 (deuxieme argument)
// Vous devez utiliser la méthode filter()

function exo12(tab_of_num, sup_num) {
    const result = tab_of_num.filter(num => num !== sup_num);
    return result;
}
//  console.log(exo12([3, 5, 7, 3, 1, 3, 5], 5));

// EXO 13
// Écrivez un algorithme pour trouver le nombre de voyelles dans une chaîne de caractères.
// f("bonjour") retourne 3 car il y 1 "a", 2 "o" et un "u"
// f("voyage") retourne 3 car il y a 1 "e", 1 "a" et 1 "o"

function exo13(str) {
    let result = 0;
    let dic = {
        e: 0,
        a: 0,
        i: 0,
        o: 0,
        u: 0,
        y: 0,
    }
    for (let i = 0; i < str.length; i++) {
        if (dic[str[i]] !== undefined) {
            dic[str[i]] = dic[str[i]] + 1;
        }
    }
    for (const key in dic) {
        console.log(dic[key]);
        result += dic[key];
    }
    return result;
}
// console.log(exo13("bonjour"));

// EXO 14
// Implémentez une fonction qui permet de trouver le plus petit nombre
// d'un tableau à 2 dimensions passé en argument
// ex: f([[1,2,3],[5,6,7],[39,-23,0]]) retourne -23

function exo14(tab) {
    let result = 0;
    for (let i = 0; i < tab.length; i++) {
        for (let j = 0; j < tab[i].length; j++) {
            if (tab[i][j] < result) {
                result = tab[i][j]
            }
        }
    }
    return result
}
// console.log(exo14([[1, 2, 3], [5, 6, 7], [39, -23, -50]]));
// EXO 15
// Implémentez une fonction pour rechercher tous les index d'un nombre donné (premier argument)
// dans un tableau de nombre entier (deuxieme argument).
// f(3,[3,5,3,6]) retourne [0,2] car le 3 est présent à l'index 0 et à l'index 2

function exo15(nums, tab) {
    let new_tab = [];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] === nums) {
            new_tab.push(i);
        }
    }
    return new_tab
}
// console.log(exo15(3, [3, 3, 3, 6]));

// EXO 16
// Implémentez une fonction pour calculer le nombre de chiffres d'un nombre entier.
// f(102543) retourne 6 car 102543 contient 6 chiffres

function exo16(nums) {
    let new_nums_str = nums.toString();
    return new_nums_str.length
}
// console.log(exo16(102543));