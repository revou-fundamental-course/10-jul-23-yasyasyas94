document.getElementById('bmiForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const age = parseInt(document.getElementById('age').value);

    // Calculate BMI
    const bmi = weight / (height * height);

    // Show Page 2 with BMI Result and Explanation
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';

    // Display BMI Result
    const bmiResultElement = document.getElementById('bmiResult');
    bmiResultElement.innerHTML = `
        <p>Jenis Kelamin: ${gender}</p>
        <p>Berat Badan: ${weight} kg</p>
        <p>Tinggi Badan: ${height * 100} cm</p>
        <p>Usia: ${age} tahun</p>
    `;
    // Display BMI Status
    const bmiStatusElement = document.getElementById('bmiStatus');
    bmiStatusElement.innerHTML = `
    <p>BMI: 
        <br>${bmi.toFixed(2)}</p>
    <p>Status Berat Badan: 
        <br>${getWeightStatus(bmi)}</p>
    `;

    // Display BMI Explanation
    const bmiExplanationElement = document.getElementById('bmiExplanation');
    bmiExplanationElement.innerHTML = getWeightExplanation(bmi);
});

function getWeightStatus(bmi) {
    if (bmi < 18.5) {
        return 'Kekurangan Berat Badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal (Ideal)';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return 'Kelebihan Berat Badan';
    } else {
        return 'Kegemukan (Obesitas)';
    }
}

function getWeightExplanation(bmi) {
    if (bmi < 18.5) {
        return '<p>Jika hasil BMI Anda menunjukkan kekurangan berat badan, penting untuk memperhatikan pola makan dengan lebih seksama dan meningkatkan asupan kalori serta nutrisi. Anda dapat mencari bantuan dari ahli gizi untuk merencanakan menu seimbang yang membantu Anda mencapai berat badan ideal dengan cara yang sehat dan aman.</p>';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return '<p>Selamat! Anda memiliki berat badan yang ideal sesuai dengan BMI Anda. Tetap pertahankan pola makan sehat dan gaya hidup aktif untuk menjaga kesehatan dan keseimbangan tubuh Anda. Lanjutkan rutinitas yang baik ini untuk mendukung kesehatan jangka panjang Anda.</p>';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return '<p>Jika hasil BMI menunjukkan kelebihan berat badan, fokuskan pada perubahan pola makan dan aktivitas fisik yang lebih aktif. Hindari makanan berlemak dan olahraga secara rutin untuk membantu Anda mencapai berat badan yang sehat. Konsultasikan dengan ahli gizi untuk panduan lebih lanjut.</p>';
    } else {
        return '<p>Jika hasil BMI Anda menunjukkan obesitas, penting untuk segera mengambil langkah-langkah untuk meningkatkan kesehatan Anda. Rencanakan pola makan yang sehat dan ikuti program olahraga yang tepat. Konsultasikan dengan ahli gizi dan profesional kesehatan lainnya untuk mendapatkan dukungan dan panduan yang sesuai dengan kondisi Anda.</p>';
    }
}

function goToPage1() {
    // Show Page 1 and Hide Page 2
    document.getElementById('page1').style.display = 'block';
    document.getElementById('page2').style.display = 'none';

    // Clear the BMI Result and Explanation
    document.getElementById('bmiResult').innerHTML = '';
    document.getElementById('bmiStatus').innerHTML = '';
    document.getElementById('bmiExplanation').innerHTML = '';
}