// Renders the module path from MODULES + CERTIFICATE (see modules-data.js)
// and handles all course interactivity: starting, unlocking, completing, scrolling.

function renderPath(){
  const path = document.getElementById('path');
  const html = MODULES.map((m, i) => moduleTemplate(m, i === 0)).join('') + certificateTemplate(CERTIFICATE);
  path.innerHTML = html;
}

function renderAbout(){
  const section = document.getElementById('about');
  if(!section || section.dataset.rendered) return;
  section.dataset.rendered = '1';

  const skillGroups = ABOUT.skills.map(g => `
    <div class="skill-row">
      <div class="skill-group-label">${g.group}</div>
      <div class="skill-tags">${g.items.map(i => `<span class="skill-tag">${i}</span>`).join('')}</div>
    </div>`).join('');

  const expCards = ABOUT.experience.map(e => `
    <div class="exp-card">
      <div class="exp-head">
        <span class="exp-role">${e.role}</span>
        <span class="exp-meta">${e.dates} &middot; ${e.location}</span>
      </div>
      <div class="exp-org">${e.org}</div>
      <ul class="exp-bullets">${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    </div>`).join('');

  const projItems = ABOUT.projects.map(p => `
    <div class="proj-item">
      ${p.link
        ? `<a href="${p.link}" target="_blank" rel="noopener" class="proj-name">${p.name} &#8599;</a>`
        : `<span class="proj-name">${p.name}</span>`}
      <p>${p.blurb}</p>
    </div>`).join('');

  const eduItems = ABOUT.education.map(e => `<li>${e}</li>`).join('');

  section.innerHTML = `
    <div class="about-inner">
      <div class="about-intro">
        <img src="${ABOUT.photo}" alt="Mirna Lopez" class="about-photo">
        <div class="about-bio">
          <h2>Hi, I'm Mirna.</h2>
          <p>${ABOUT.bio}</p>
          <div class="about-links">
            <a href="${ABOUT.links.linkedin}" target="_blank" rel="noopener" class="inline-link">LinkedIn</a>
            <a href="${ABOUT.links.github}" target="_blank" rel="noopener" class="inline-link">GitHub</a>
            <a href="${ABOUT.links.resume}" download class="inline-link">Download resume</a>
          </div>
        </div>
      </div>
      <h3 class="about-heading">Skills</h3>
      <div class="skill-rows">${skillGroups}</div>
      <h3 class="about-heading">Experience</h3>
      <div class="exp-list">${expCards}</div>
      <h3 class="about-heading">Projects</h3>
      <div class="proj-list">${projItems}</div>
      <h3 class="about-heading">Education</h3>
      <ul class="edu-list">${eduItems}</ul>
    </div>`;
}

function moduleTemplate(m, isFirst){
  const builtItems = m.built.map(b => `<li>${b}</li>`).join('');
  const imageBlocks = (m.images || []).map(img =>
    `<img src="${img.src}" alt="${img.alt}" class="proof-img">
     <p class="caption">${img.caption}</p>`
  ).join('');
  const linkBlock = m.link
    ? `<a href="${m.link.url}" target="_blank" rel="noopener" class="lesson-link">${m.link.label} &#8599;</a>`
    : '';
  const toolkitTags = m.toolkit.map(t => `<span>${t}</span>`).join('');

  return `
    <div class="node-wrap ${isFirst ? 'unlocked' : ''}" id="wrap-${m.id}">
      <div class="bullet" id="bullet-${m.id}">${m.id}</div>
      <button class="node" id="node-${m.id}" onclick="toggleNode(${m.id})" ${isFirst ? '' : 'disabled'}>
        <div>
          <div class="node-label">${m.label}</div>
          <div class="node-sub">${m.sub}</div>
        </div>
        <span class="check">&#10003;</span>
      </button>
      <div class="lesson" id="lesson-${m.id}">
        <div class="lesson-inner" id="inner-${m.id}" data-step="1">
          <div class="step active" id="step-${m.id}-1">
            <span class="obj-tag">${m.objective}</span>
            <h3>${m.title}</h3>
            <h4>${m.situationHeading}</h4>
            <p>${m.situation}</p>
          </div>
          <div class="step" id="step-${m.id}-2">
            <h4>${m.builtHeading}</h4>
            <ul>${builtItems}</ul>
            <p>${m.extra}</p>
            ${linkBlock}
            ${imageBlocks}
          </div>
          <div class="step" id="step-${m.id}-3">
            <h4>Toolkit</h4>
            <div class="toolkit">${toolkitTags}</div>
            <div class="reflect">
              <b>Honest reflection</b>
              ${m.reflection}
            </div>
            <button class="complete-btn" id="complete-${m.id}" onclick="markComplete(${m.id})">Mark complete</button>
          </div>
          <div class="step-nav">
            <button class="step-btn step-back" onclick="stepBack(${m.id})">&#8592; Back</button>
            <span class="step-dots" id="dots-${m.id}">
              <span class="dot active"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </span>
            <button class="step-btn step-next" id="next-${m.id}" onclick="stepNext(${m.id})">Next &#8594;</button>
          </div>
        </div>
      </div>
    </div>`;
}

function certificateTemplate(c){
  const badgeTags = c.badges.map(b => `<span>${b}</span>`).join('');
  return `
    <div class="node-wrap" id="wrap-${c.id}">
      <div class="bullet" id="bullet-${c.id}">&#9733;</div>
      <button class="node" id="node-${c.id}" onclick="toggleNode(${c.id})" disabled>
        <div>
          <div class="node-label">${c.label}</div>
          <div class="node-sub">${c.sub}</div>
        </div>
        <span class="check">&#10003;</span>
      </button>
      <div class="lesson" id="lesson-${c.id}">
        <div class="cert-inner">
          <span class="seal material-icons-round">emoji_events</span>
          <h3>Certificate of Completion</h3>
          <p>This certifies that you've just experienced how</p>
          <div class="name">${c.name}</div>
          <p>${c.blurb}</p>
          <div class="badges">${badgeTags}</div>
          <dl class="contact-grid">
            <dt>Email</dt><dd>${c.contact.email}</dd>
            <dt>LinkedIn</dt><dd>${c.contact.linkedin}</dd>
            <dt>Status</dt><dd>${c.contact.status}</dd>
          </dl>
          <a href="${c.resume}" download class="complete-btn" style="display:inline-block; text-decoration:none; margin-top:20px;">Download my resume</a>
        </div>
      </div>
    </div>`;
}

const TOTAL_MODULES = MODULES.length + 1; // + certificate

function startCourse(skipAll){
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  const course = document.getElementById('course');
  course.classList.add('active');
  if(skipAll){ unlockAll(); }
  else { toggleNode(1); }
  window.scrollTo({top: 0, behavior: 'auto'});
}

function unlockAll(){
  for(let id = 1; id <= TOTAL_MODULES; id++){
    const wrap = document.getElementById('wrap-'+id);
    const node = document.getElementById('node-'+id);
    wrap.classList.add('unlocked');
    node.disabled = false;
    document.getElementById('lesson-'+id).classList.add('open');
    const inner = document.getElementById('inner-'+id);
    if(inner) inner.classList.add('flat');
  }
}

function toggleNode(id){
  const lesson = document.getElementById('lesson-'+id);
  const isOpen = lesson.classList.contains('open');
  document.querySelectorAll('.lesson.open').forEach(l => l.classList.remove('open'));
  if(!isOpen){ lesson.classList.add('open'); }
}

function showStep(id, step){
  const inner = document.getElementById('inner-'+id);
  inner.dataset.step = step;
  [1,2,3].forEach(s => {
    document.getElementById('step-'+id+'-'+s).classList.toggle('active', s === step);
  });
  document.querySelectorAll('#dots-'+id+' .dot').forEach((d, i) => {
    d.classList.toggle('active', i === step - 1);
  });
}

function stepNext(id){
  const step = parseInt(document.getElementById('inner-'+id).dataset.step);
  if(step < 3) showStep(id, step + 1);
}

function stepBack(id){
  const step = parseInt(document.getElementById('inner-'+id).dataset.step);
  if(step > 1) showStep(id, step - 1);
}

function markComplete(id){
  document.getElementById('wrap-'+id).classList.add('done');
  const btn = document.getElementById('complete-'+id);
  btn.disabled = true;
  btn.textContent = 'Completed';
  document.getElementById('inner-'+id).classList.add('flat');
  updateProgress();

  const next = id + 1;
  const nextWrap = document.getElementById('wrap-'+next);
  if(nextWrap){
    document.getElementById('node-'+next).disabled = false;
    nextWrap.classList.add('unlocked');
    setTimeout(() => {
      toggleNode(next);
      setTimeout(() => {
        const nodeEl = document.getElementById('node-'+next);
        const y = nodeEl.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({top: y, behavior: 'auto'});
        if(next === TOTAL_MODULES){
          nextWrap.classList.add('done');
          updateProgress();
        }
      }, 420);
    }, 250);
  }
}

function updateProgress(){
  const done = document.querySelectorAll('.node-wrap.done').length;
  document.getElementById('progressFill').style.width = (done / TOTAL_MODULES * 100) + '%';
  document.getElementById('progressLabel').textContent = done + ' / ' + TOTAL_MODULES + ' modules complete';
}

window.addEventListener('scroll', () => {
  const totop = document.getElementById('totop');
  if(window.scrollY > 600){ totop.classList.add('show'); }
  else{ totop.classList.remove('show'); }
});

document.addEventListener('DOMContentLoaded', () => { renderPath(); renderAbout(); });
