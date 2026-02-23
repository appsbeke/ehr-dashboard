// Dr. Kassim EHR Dashboard - Enhanced with Rich Sample Data
// Connects to your deployed API at https://ehr-api-simple.vercel.app

// API Configuration
const API_BASE_URL = 'https://ehr-api-simple.vercel.app';

// Rich Sample Data for Demo
const SAMPLE_PATIENTS = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        email: "sarah.johnson@email.com",
        phone: "(555) 123-4567",
        dob: "1985-03-15",
        address: "123 Medical Center Dr, Suite 400, Healthcare City, HC 12345",
        bloodType: "O+",
        emergencyContact: "Michael Johnson (Spouse) - (555) 987-6543",
        insurance: "HealthCare Plus Premium",
        policyNumber: "HCP-2024-001",
        createdAt: "2024-01-15T10:30:00Z",
        lastVisit: "2024-02-20T14:30:00Z",
        allergies: ["Penicillin", "Shellfish"],
        conditions: ["Hypertension", "Seasonal Allergies"],
        medications: ["Lisinopril 10mg", "Claritin 10mg"],
        status: "Active"
    },
    {
        id: 2,
        name: "Robert Chen",
        email: "robert.chen@email.com",
        phone: "(555) 234-5678",
        dob: "1978-11-22",
        address: "456 Wellness Blvd, Apt 12B, Medical District, HC 12346",
        bloodType: "A-",
        emergencyContact: "Lisa Chen (Sister) - (555) 876-5432",
        insurance: "MediCare Standard",
        policyNumber: "MCS-2024-002",
        createdAt: "2024-01-20T09:15:00Z",
        lastVisit: "2024-02-18T11:00:00Z",
        allergies: ["Latex"],
        conditions: ["Type 2 Diabetes", "High Cholesterol"],
        medications: ["Metformin 500mg", "Atorvastatin 20mg"],
        status: "Active"
    },
    {
        id: 3,
        name: "Maria Rodriguez",
        email: "maria.rodriguez@email.com",
        phone: "(555) 345-6789",
        dob: "1992-07-08",
        address: "789 Health Street, Villa 15, Wellness Community, HC 12347",
        bloodType: "B+",
        emergencyContact: "Carlos Rodriguez (Brother) - (555) 765-4321",
        insurance: "Family Health Plan",
        policyNumber: "FHP-2024-003",
        createdAt: "2024-01-25T16:45:00Z",
        lastVisit: "2024-02-15T13:30:00Z",
        allergies: ["None Known"],
        conditions: ["Asthma", "Migraine"],
        medications: ["Albuterol Inhaler", "Sumatriptan 50mg"],
        status: "Active"
    }
];

const SAMPLE_APPOINTMENTS = [
    {
        id: 1,
        patientName: "Dr. Sarah Johnson",
        date: "2024-02-24",
        time: "10:00",
        type: "Annual Check-up",
        doctor: "Dr. Michael Chen",
        status: "Scheduled",
        notes: "Annual physical examination, blood work required",
        room: "Exam Room 101",
        priority: "Normal"
    },
    {
        id: 2,
        patientName: "Robert Chen",
        date: "2024-02-24",
        time: "14:30",
        type: "Diabetes Follow-up",
        doctor: "Dr. Lisa Wang",
        status: "Scheduled",
        notes: "HbA1c check, medication review",
        room: "Exam Room 102",
        priority: "High"
    },
    {
        id: 3,
        patientName: "Maria Rodriguez",
        date: "2024-02-25",
        time: "09:15",
        type: "Asthma Consultation",
        doctor: "Dr. James Miller",
        status: "Confirmed",
        notes: "Pulmonary function test, inhaler technique review",
        room: "Exam Room 103",
        priority: "Normal"
    }
];

const SAMPLE_PRESCRIPTIONS = [
    {
        id: 1,
        patientName: "Dr. Sarah Johnson",
        medication: "Lisinopril 10mg",
        dosage: "Take 1 tablet daily in the morning",
        frequency: "Once daily",
        startDate: "2024-02-01",
        endDate: "2024-05-01",
        prescribedBy: "Dr. Michael Chen",
        pharmacy: "MediCare Pharmacy",
        instructions: "Take with food. Monitor blood pressure regularly.",
        refills: 3,
        status: "Active"
    },
    {
        id: 2,
        patientName: "Robert Chen",
        medication: "Metformin 500mg",
        dosage: "Take 1 tablet twice daily with meals",
        frequency: "Twice daily",
        startDate: "2024-01-15",
        endDate: "2024-07-15",
        prescribedBy: "Dr. Lisa Wang",
        pharmacy: "Wellness Pharmacy",
        instructions: "Monitor blood sugar levels. Take consistently with meals.",
        refills: 5,
        status: "Active"
    },
    {
        id: 3,
        patientName: "Maria Rodriguez",
        medication: "Albuterol Inhaler",
        dosage: "2 puffs every 4-6 hours as needed",
        frequency: "As needed",
        startDate: "2024-01-20",
        endDate: "2024-12-31",
        prescribedBy: "Dr. James Miller",
        pharmacy: "Respiratory Care Pharmacy",
        instructions: "Use as directed for asthma symptoms. Rinse mouth after use.",
        refills: 2,
        status: "Active"
    }
];

const SAMPLE_MEDICAL_RECORDS = [
    {
        id: 1,
        patientName: "Dr. Sarah Johnson",
        date: "2024-02-20",
        type: "Annual Physical Examination",
        doctor: "Dr. Michael Chen",
        chiefComplaint: "Annual check-up, feeling well overall",
        diagnosis: "Essential Hypertension, controlled",
        treatment: "Continue current medication, lifestyle modifications",
        vitalSigns: {
            bloodPressure: "128/82 mmHg",
            heartRate: "72 bpm",
            temperature: "98.6°F",
            weight: "145 lbs",
            height: "5'6\""
        },
        labResults: {
            cholesterol: "Total: 195 mg/dL, HDL: 55 mg/dL, LDL: 120 mg/dL",
            glucose: "95 mg/dL (fasting)",
            hemoglobin: "13.8 g/dL"
        },
        notes: "Patient responding well to current treatment. Blood pressure well-controlled."
    },
    {
        id: 2,
        patientName: "Robert Chen",
        date: "2024-02-18",
        type: "Diabetes Management Visit",
        doctor: "Dr. Lisa Wang",
        chiefComplaint: "Routine diabetes follow-up, occasional fatigue",
        diagnosis: "Type 2 Diabetes Mellitus, well-controlled",
        treatment: "Continue Metformin, dietary counseling provided",
        vitalSigns: {
            bloodPressure: "125/78 mmHg",
            heartRate: "76 bpm",
            temperature: "98.4°F",
            weight: "175 lbs",
            height: "5'10\""
        },
        labResults: {
            hba1c: "6.8%",
            glucose: "142 mg/dL (2-hour post-meal)",
            cholesterol: "Total: 185 mg/dL"
        },
        notes: "HbA1c improved from 7.2% to 6.8%. Patient compliant with medication and diet."
    }
];

const SAMPLE_AI_RECOMMENDATIONS = [
    {
        id: 1,
        type: "Doctor Recommendation",
        description: "Based on patient blood pressure readings, recommend Dr. Sarah Williams - Cardiology Specialist",
        confidence: 0.92,
        reason: "Patient shows signs of hypertension requiring specialist care",
        priority: "High"
    },
    {
        id: 2,
        type: "Appointment Scheduling",
        description: "Patient Robert Chen due for HbA1c test - schedule follow-up in 3 months",
        confidence: 0.88,
        reason: "Routine diabetes monitoring protocol",
        priority: "Medium"
    },
    {
        id: 3,
        type: "Medication Review",
        description: "Consider adjusting Metformin dosage based on recent glucose readings",
        confidence: 0.85,
        reason: "Glucose levels showing improvement, potential for dose optimization",
        priority: "Medium"
    }
];

// Global state
let patients = [];
let appointments = [];
let prescriptions = [];
let records = [];
let aiRecommendations = [];

// Initialize dashboard with sample data
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Dr. Kassim EHR Dashboard Loading with Sample Data...');
    console.log('📊 Loading rich sample data for demonstration...');
    
    // Load sample data immediately
    loadSampleData();
    checkAPIStatus();
    setupEventListeners();
    
    console.log('✅ Sample data loaded successfully!');
    console.log('👥 Patients:', patients.length);
    console.log('📅 Appointments:', appointments.length);
    console.log('💊 Prescriptions:', prescriptions.length);
    console.log('🤖 AI Recommendations:', aiRecommendations.length);
});

// Load rich sample data
function loadSampleData() {
    console.log('Loading sample patient data...');
    patients = [...SAMPLE_PATIENTS];
    console.log('✅ Patients loaded:', patients.length);
    
    console.log('Loading sample appointments...');
    appointments = [...SAMPLE_APPOINTMENTS];
    console.log('✅ Appointments loaded:', appointments.length);
    
    console.log('Loading sample prescriptions...');
    prescriptions = [...SAMPLE_PRESCRIPTIONS];
    console.log('✅ Prescriptions loaded:', prescriptions.length);
    
    console.log('Loading sample medical records...');
    records = [...SAMPLE_MEDICAL_RECORDS];
    console.log('✅ Medical records loaded:', records.length);
    
    console.log('Loading AI recommendations...');
    aiRecommendations = [...SAMPLE_AI_RECOMMENDATIONS];
    console.log('✅ AI recommendations loaded:', aiRecommendations.length);
    
    // Display all sample data
    displayPatients(patients);
    displayAppointments(appointments);
    displayPrescriptions(prescriptions);
    displayMedicalRecords(records);
    displayAIRecommendations(aiRecommendations);
    updateDashboardStats();
}

// Enhanced display functions with rich data
function displayPatients(patients) {
    const patientList = document.getElementById('patient-list');
    
    if (patients.length === 0) {
        patientList.innerHTML = '<p>No patients found. Add your first patient!</p>';
        return;
    }
    
    patientList.innerHTML = patients.map(patient => `
        <div class="patient-item" style="border-left: 4px solid #48bb78;">
            <div style="flex: 1;">
                <strong>${patient.name}</strong>
                <br><small>📧 ${patient.email} | 📞 ${patient.phone}</small>
                <br><small>🎂 ${formatDate(patient.dob)} | 🩸 ${patient.bloodType}</small>
                <br><small>🏠 ${patient.address}</small>
                <br><small>💳 ${patient.insurance} | Policy: ${patient.policyNumber}</small>
            </div>
            <div style="text-align: right;">
                <div class="status-indicator status-online" style="margin-bottom: 0.5rem;"></div>
                <small>Status: ${patient.status}</small>
                <br><button class="btn" onclick="viewPatientDetails(${patient.id})">View Details</button>
            </div>
        </div>
    `).join('');
}

function displayAppointments(appointments) {
    const appointmentList = document.getElementById('appointment-list');
    
    if (appointments.length === 0) {
        appointmentList.innerHTML = '<p>No appointments scheduled.</p>';
        return;
    }
    
    appointmentList.innerHTML = appointments.map(apt => `
        <div class="patient-item" style="border-left: 4px solid #4299e1;">
            <div style="flex: 1;">
                <strong>${apt.patientName}</strong>
                <br><small>📅 ${formatDate(apt.date)} at ${apt.time}</small>
                <br><small>👨‍⚕️ ${apt.doctor} - ${apt.type}</small>
                <br><small>🏥 Room: ${apt.room} | Priority: ${apt.priority}</small>
                <br><small>📝 ${apt.notes}</small>
            </div>
            <div style="text-align: right;">
                <span class="btn" style="background: #48bb78; margin-bottom: 0.5rem;">${apt.status}</span>
                <br><button class="btn" onclick="viewAppointmentDetails(${apt.id})">View Details</button>
            </div>
        </div>
    `).join('');
}

function displayPrescriptions(prescriptions) {
    const prescriptionList = document.getElementById('prescription-list');
    
    if (prescriptions.length === 0) {
        prescriptionList.innerHTML = '<p>No prescriptions found.</p>';
        return;
    }
    
    prescriptionList.innerHTML = prescriptions.map(rx => `
        <div class="patient-item" style="border-left: 4px solid #4299e1;">
            <div style="flex: 1;">
                <strong>${rx.medication}</strong>
                <br><small>👤 ${rx.patientName}</small>
                <br><small>💊 ${rx.dosage}</small>
                <br><small>📅 ${formatDate(rx.startDate)} - ${formatDate(rx.endDate)}</small>
                <br><small>👨‍⚕️ Prescribed by: ${rx.prescribedBy}</small>
                <br><small>🏪 Pharmacy: ${rx.pharmacy}</small>
                <br><small>📝 ${rx.instructions}</small>
            </div>
            <div style="text-align: right;">
                <span class="btn" style="background: #4299e1; margin-bottom: 0.5rem;">${rx.status}</span>
                <br><small>Refills: ${rx.refills}</small>
                <br><button class="btn" onclick="viewPrescriptionDetails(${rx.id})">Details</button>
            </div>
        </div>
    `).join('');
}

function displayMedicalRecords(records) {
    const recordsList = document.getElementById('records-list');
    
    if (records.length === 0) {
        recordsList.innerHTML = '<p>No medical records found.</p>';
        return;
    }
    
    recordsList.innerHTML = records.map(record => `
        <div class="patient-item" style="border-left: 4px solid #9f7aea;">
            <div style="flex: 1;">
                <strong>${record.type}</strong>
                <br><small>👤 ${record.patientName} | 📅 ${formatDate(record.date)}</small>
                <br><small>👨‍⚕️ ${record.doctor}</small>
                <br><small>🩺 ${record.chiefComplaint}</small>
                <br><small>💉 Vital Signs: BP ${record.vitalSigns.bloodPressure}, HR ${record.vitalSigns.heartRate}</small>
            </div>
            <div style="text-align: right;">
                <span class="btn" style="background: #9f7aea; margin-bottom: 0.5rem;">View Record</span>
                <br><button class="btn" onclick="viewMedicalRecordDetails(${record.id})">Full Details</button>
            </div>
        </div>
    `).join('');
}

function displayAIRecommendations(recommendations) {
    const aiRecommendations = document.getElementById('ai-recommendations');
    
    if (recommendations.length === 0) {
        aiRecommendations.innerHTML = '<p>No AI recommendations available.</p>';
        return;
    }
    
    aiRecommendations.innerHTML = recommendations.map(rec => `
        <div class="patient-item" style="border-left: 4px solid #667eea;">
            <div style="flex: 1;">
                <strong>${rec.type}</strong>
                <br><small>${rec.description}</small>
                <br><small>🤖 Confidence: ${Math.round(rec.confidence * 100)}%</small>
                <br><small>💡 ${rec.reason}</small>
                <br><small>🎯 Priority: ${rec.priority}</small>
            </div>
            <div style="text-align: right;">
                <button class="btn btn-success" onclick="applyRecommendation(${rec.id})">Apply</button>
            </div>
        </div>
    `).join('');
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function viewPatientDetails(patientId) {
    const patient = patients.find(p => p.id === patientId);
    if (patient) {
        alert(`Patient Details:\n\n` +
            `Name: ${patient.name}\n` +
            `Email: ${patient.email}\n` +
            `Phone: ${patient.phone}\n` +
            `DOB: ${formatDate(patient.dob)}\n` +
            `Address: ${patient.address}\n` +
            `Blood Type: ${patient.bloodType}\n` +
            `Insurance: ${patient.insurance}\n` +
            `Emergency Contact: ${patient.emergencyContact}\n` +
            `Allergies: ${patient.allergies.join(', ')}\n` +
            `Conditions: ${patient.conditions.join(', ')}\n` +
            `Medications: ${patient.medications.join(', ')}\n` +
            `Status: ${patient.status}`);
    }
}

function viewAppointmentDetails(aptId) {
    const apt = appointments.find(a => a.id === aptId);
    if (apt) {
        alert(`Appointment Details:\n\n` +
            `Patient: ${apt.patientName}\n` +
            `Date: ${formatDate(apt.date)} at ${apt.time}\n` +
            `Type: ${apt.type}\n` +
            `Doctor: ${apt.doctor}\n` +
            `Room: ${apt.room}\n` +
            `Priority: ${apt.priority}\n` +
            `Notes: ${apt.notes}\n` +
            `Status: ${apt.status}`);
    }
}

function viewPrescriptionDetails(rxId) {
    const rx = prescriptions.find(p => p.id === rxId);
    if (rx) {
        alert(`Prescription Details:\n\n` +
            `Patient: ${rx.patientName}\n` +
            `Medication: ${rx.medication}\n` +
            `Dosage: ${rx.dosage}\n` +
            `Frequency: ${rx.frequency}\n` +
            `Prescribed by: ${rx.prescribedBy}\n` +
            `Pharmacy: ${rx.pharmacy}\n` +
            `Instructions: ${rx.instructions}\n` +
            `Refills: ${rx.refills}\n` +
            `Status: ${rx.status}`);
    }
}

function viewMedicalRecordDetails(recordId) {
    const record = records.find(r => r.id === recordId);
    if (record) {
        alert(`Medical Record Details:\n\n` +
            `Patient: ${record.patientName}\n` +
            `Date: ${formatDate(record.date)}\n` +
            `Type: ${record.type}\n` +
            `Doctor: ${record.doctor}\n` +
            `Chief Complaint: ${record.chiefComplaint}\n` +
            `Diagnosis: ${record.diagnosis}\n` +
            `Treatment: ${record.treatment}\n` +
            `Vital Signs: BP ${record.vitalSigns.bloodPressure}, HR ${record.vitalSigns.heartRate}\n` +
            `Lab Results: ${record.labResults.cholesterol}`);
    }
}

function applyRecommendation(recId) {
    const rec = aiRecommendations.find(r => r.id === recId);
    if (rec) {
        showSuccess(`Applied recommendation: ${rec.description}`);
    }
}

function setupEventListeners() {
    // Modal close buttons
    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    // Refresh dashboard button
    document.getElementById('refresh-dashboard')?.addEventListener('click', refreshDashboard);
}

// Enhanced utility functions
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success';
    successDiv.innerHTML = `
        <strong>✅ Success!</strong> ${message}
        <button onclick="this.parentElement.remove()" style="float: right; background: none; border: none; color: #22543d; font-size: 20px; cursor: pointer;">&times;</button>
    `;
    document.querySelector('.container').insertBefore(successDiv, document.querySelector('.dashboard-grid'));
    setTimeout(() => successDiv.remove(), 5000);
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.innerHTML = `
        <strong>❌ Error!</strong> ${message}
        <button onclick="this.parentElement.remove()" style="float: right; background: none; border: none; color: #c53030; font-size: 20px; cursor: pointer;">&times;</button>
    `;
    document.querySelector('.container').insertBefore(errorDiv, document.querySelector('.dashboard-grid'));
    setTimeout(() => errorDiv.remove(), 5000);
}

// Export functions for global use
window.showAddPatientModal = showAddPatientModal;
window.showBookAppointmentModal = showBookAppointmentModal;
window.showMedicalRecordsModal = showMedicalRecordsModal;
window.showAddPrescriptionModal = showAddPrescriptionModal;
window.showAIRecommendationsModal = showAIRecommendationsModal;
window.closeModal = closeModal;
window.addPatient = addPatient;
window.viewPatientDetails = viewPatientDetails;
window.viewAppointmentDetails = viewAppointmentDetails;
window.viewPrescriptionDetails = viewPrescriptionDetails;
window.viewMedicalRecordDetails = viewMedicalRecordDetails;
window.applyRecommendation = applyRecommendation;
window.refreshDashboard = refreshDashboard;

console.log('🎉 Dr. Kassim EHR Dashboard loaded with rich sample data!');
console.log('📊 Sample data includes:');
console.log('  -', patients.length, 'patients with full medical profiles');
console.log('  -', appointments.length, 'appointments with detailed information');
console.log('  -', prescriptions.length, 'prescriptions with complete medication details');
console.log('  -', records.length, 'medical records with comprehensive data');
console.log('  -', aiRecommendations.length, 'AI-powered recommendations');