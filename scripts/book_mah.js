
// قائمة الأطباء حسب التخصص
const doctors = {
  Physiotherapist: [" Dr.Mario Gad"],
  neurology: [" Dr/Mahmoud-ALdoumyati, MD"],
  obstetrics  : ["Dr. Khaled Al-Qandilids, MD "],
  orthopedic: ["Dr. Ahmed Salahs, MD"],
  orthopedi: ["Dr. hisham khaled, MD "],
  orthoped: [" Dr.Mojaddidi surgery, MD"],
};

// بيانات المواعيد المحجوزة
const bookedAppointments = {};

// عند تغيير التخصص
document.getElementById("specialty").addEventListener("change", function () {
  const specialty = this.value;
  const doctorSelect = document.getElementById("doctor");

  // إعادة تعيين قائمة الأطباء
  doctorSelect.innerHTML = '<option value="" disabled selected>اختر الطبيب</option>';

  // إضافة الأطباء المتوفرين للتخصص
  if (specialty) {
    doctors[specialty].forEach(doctor => {
      const option = document.createElement("option");
      option.value = doctor;
      option.textContent = doctor;
      doctorSelect.appendChild(option);
    });
  }

  // إعادة تعيين الحقول الأخرى
  document.getElementById("date").value = "";
  document.getElementById("time").innerHTML = '<option value="" disabled selected>اختر الوقت</option>';
});

// عند تغيير الطبيب أو التاريخ
document.getElementById("doctor").addEventListener("change", updateTimes);
document.getElementById("date").addEventListener("change", updateTimes);

// تحديث الأوقات المتاحة بناءً على الطبيب والتاريخ
function updateTimes() {
  const doctor = document.getElementById("doctor").value;
  const date = document.getElementById("date").value;
  const timeSelect = document.getElementById("time");

  // إعادة تعيين قائمة الأوقات
  timeSelect.innerHTML = '<option value="" disabled selected>اختر الوقت</option>';

  if (!doctor || !date) {
    return; // لا داعي لعرض الأوقات إذا لم يتم اختيار الطبيب أو التاريخ
  }

  // جميع الأوقات المتاحة
  const allTimes = ["10:00 صباحاً","11:00  ظهرا" ,"12:00 ظهراً", "1:00 مساء ","2:00 مساء","3:00 مساءً", "4:00 مساء"," مساء 5:00"," مساء  6:00","مساء 7:00","مساء 8:00","مساء  9:00","10:00  مساء"];

  // الأوقات المحجوزة
  const bookedTimes = bookedAppointments[doctor]?.[date] || [];

  // عرض الأوقات المتاحة فقط
  let availableTimes = 0;
  allTimes.forEach(time => {
    if (!bookedTimes.includes(time)) {
      const option = document.createElement("option");
      option.value = time;
      option.textContent = time;
      timeSelect.appendChild(option);
      availableTimes++;
    }
  });

  // إذا لم تكن هناك أوقات متاحة
  if (availableTimes === 0) {
    const noTimesOption = document.createElement("option");
    noTimesOption.value = "";
    noTimesOption.textContent = "لا توجد أوقات متاحة لهذا اليوم";
    noTimesOption.disabled = true;
    timeSelect.appendChild(noTimesOption);
  }
}

// التعامل مع نموذج الحجز
document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const specialty = document.getElementById("specialty").value;
  const doctor = document.getElementById("doctor").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  // التحقق من الحقول
  if (!specialty || !doctor || !date || !time) {
    alert("يرجى ملء جميع الحقول قبل تأكيد الحجز.");
    return;
  }

  // تحقق من توفر الوقت
  if (bookedAppointments[doctor]?.[date]?.includes(time)) {
    alert("عذرًا، الوقت الذي اخترته غير متاح. يرجى اختيار وقت آخر.");
    return;
    const bookedAppointments = {
  "د. أحمد": {
    "2024-12-06": ["10:00 صباحاً", "12:00 ظهراً"]
  }
};
  }

  // تأكيد الحجز
  alert("تم تأكيد الحجز بنجاح!");

  // حفظ الموعد
  if (!bookedAppointments[doctor]) {
    bookedAppointments[doctor] = {};
  }
  if (!bookedAppointments[doctor][date]) {
    bookedAppointments[doctor][date] = [];
  }
  bookedAppointments[doctor][date].push(time);

  // إعادة تعيين النموذج
  document.getElementById("booking-form").reset();
  document.getElementById("time").innerHTML = '<option value="" disabled selected>اختر الوقت</option>';

});

