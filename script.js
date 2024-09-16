function calculate() {
    // 入力値の取得
    const criticalDamage = parseFloat(document.getElementById('criticalDamage').value);
    const criticalResistance = parseFloat(document.getElementById('criticalResistance').value);

    if (isNaN(criticalDamage) || isNaN(criticalResistance)) {
        alert("数値を正しく入力してください。");
        return;
    }

    // 計算1: ダメージ倍率 = 会心ダメージ ÷ 会心抵抗 × 100
    const damageMultiplier = (criticalDamage / criticalResistance) * 100;

    // 計算2: 最低保証倍率 = 会心ダメージ ÷ 150 × 100
    const minGuaranteedMultiplier = (criticalDamage / 150) * 100;

    // 結果の表示
    document.getElementById('damageMultiplier').innerText = damageMultiplier.toFixed(2);
    document.getElementById('minGuaranteedMultiplier').innerText = minGuaranteedMultiplier.toFixed(2);
}

