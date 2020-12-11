const print = text => console.log(text);

//print intstructions for use with function

function instructionsForUse() {
    print('\nParancssori Todo applikáció');
    print('=============================\n');
    print('Parancssori argumentumok:');
    print('-l   Kilistázza a feladatokat');
    print('-a   Új feladatot ad hozzá');
    print('-r   Eltávolít egy feladatot');
    print('-c   Teljesít egy feladatot');
}

instructionsForUse()

export default instructionsForUse;