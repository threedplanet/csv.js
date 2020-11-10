interface DefaultParseOptions  {
    delimiter? : string,
    newLine? : string
}

var defaultParseOptions = {
    delimiter : ',',
    newLine : '\n'
}


export function parse(raw : string, options : DefaultParseOptions){
    let o = {...options, ...defaultParseOptions}
    let d = []
    let r : any = raw.split(o.newLine)
    const titles = r[0].split(o.delimiter)
    const rows = r.slice(1).map(rr=>rr.split(o.delimiter))
    rows.forEach(row => {
        let ri = {}
        for(let index in titles){
            ri[titles[index]] = row[index]
        }
        d.push(ri)
        
    });
    return d
}

export function stringify(data : object[], options : DefaultParseOptions){
    let o = {...options, ...defaultParseOptions}
    let titles = Object.keys(data[0])
    let d = `${titles.join(o.delimiter)}${o.newLine}`
    data.forEach(row=>{
        d += `${Object.values(row).join(o.delimiter)}${o.newLine}`
    })
    return d
}