SELECT i.name,
       ri.quantity_needed,
       i.unit,
       mi.name
FROM recipeitems ri
JOIN ingredients i ON i.ingredient_id = ri.ingredient_id
JOIN menuitems mi ON mi.item_id = ri.item_id
WHERE mi.name = 'Bacon Cheeseburger';