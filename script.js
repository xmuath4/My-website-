// قائمة الجوال
const btn = document.querySelector('.menu-btn');
const mobile = document.getElementById('mobile');
if (btn) {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    mobile.classList.toggle('show');
  });
}

// سنة الفوتر
document.getElementById('year').textContent = new Date().getFullYear();

// إرسال نموذج تواصل تجريبي (بدون باك إند)
function handleSubmit(e){
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  // مثال: استبدل هذا بالربط على خدمة طرف ثالث مثل Formspree
  const msg = document.getElementById('formMsg');
  msg.textContent = 'تم إرسال الرسالة محليًا (تجريبي). اربط الخدمة لاستقبالها فعليًا.';
  form.reset();
  return false;
}
