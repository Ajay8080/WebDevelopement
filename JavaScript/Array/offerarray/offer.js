let items=[250, 645, 300, 900, 50];

for(i=0; i<items.length;i++){
    let offer= items[i]/10;
    items[i]-=offer;
}
console.log(items);