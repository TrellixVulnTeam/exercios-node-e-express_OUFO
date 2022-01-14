process.stdout.write('Está gostando do curso? ')
process.stdin.on('data', function (data) {
    if (data == 'Não' || 'nao' || 'Nao') {
        process.stdout.write('Por que?')
        process.stdin.on('response', function (response) { process.stdout.write('Ok Obrigado') })
    } else {
        process.stdout.write(`Sua resposta foi ${data.toString()} Obrigado!\n`)
        process.exit()
    }
})