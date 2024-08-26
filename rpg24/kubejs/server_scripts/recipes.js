ServerEvents.recipes(event => {
    //event.remove({ output: '#waystones:waystones' })
    event.shaped('ae2:calculation_processor_press', ['C C', ' I ', 'C C'], { C: '#forge:gems/certus_quartz', I: 'minecraft:iron_block' }).noMirror().id(`kubejs:ae2/calculation_processor_press`)
    event.shaped('ae2:engineering_processor_press', ['C C', ' I ', 'C C'], { C: '#forge:gems/diamond', I: 'minecraft:iron_block' }).noMirror().id(`kubejs:ae2/engineering_processor_press`)
    event.shaped('ae2:logic_processor_press', ['C C', ' I ', 'C C'], { C: '#forge:ingots/gold', I: 'minecraft:iron_block' }).noMirror().id(`kubejs:ae2/logic_processor_press`)
    event.shaped('ae2:silicon_press', ['C C', ' I ', 'C C'], { C: '#forge:silicon', I: 'minecraft:iron_block' }).noMirror().id(`kubejs:ae2/silicon_press`)
})
