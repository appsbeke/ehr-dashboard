// Dr. Kassim EHR Dashboard - JavaScript Application
// Connects to your deployed API at https://ehr-api-simple.vercel.app

// API Configuration
const API_BASE_URL = 'https://ehr-api-simple.vercel.app';

// Global state
let patients = [];
let appointments = [];
let prescriptions = [];
let records = [];

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Dr. Kassim EHR Dashboard Loading...');
    initializeDashboard();
});

// Initialize dashboard
async function initializeDashboard() {
    try {
        await checkAPIStatus();
        await loadDashboardData();
        setupEventListeners();
        console.log('✅ Dashboard initialized successfully');
    } catch (error) {
        console.error('❌ Dashboard initialization failed:', error);
        showError('Failed to initialize dashboard: ' + error.message);
    }
}

// Check API status
async function checkAPIStatus() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/health`);
        const data = await response.json();
        
        if (data.success) {
            document.getElementById('status-indicator').className = 'status-indicator status-online';
            document.getElementById('status-text').innerHTML = `✅ API Connected - ${data.message}`;
            document.getElementById('api-status').textContent = 'Online';
            document.getElementById('last-updated').textContent = new Date().toLocaleString();
        } else {
            throw new Error('API returned error');
        }
    } catch (error) {
        document.getElementById('status-indicator').className = 'status-indicator status-offline';
        document.getElementById('status-text').innerHTML = '❌ API Disconnected';
        document.getElementById('api-status').textContent = 'Offline';
        showError('Cannot connect to API: ' + error.message);
    }
}

// Load dashboard data
async function loadDashboardData() {
    try {
        // Load patients
        await loadPatients();
        
        // Load appointments
        await loadAppointments();
        
        // Load prescriptions
        await loadPrescriptions();
        
        // Load AI recommendations
        await loadAIRecommendations();
        
        // Update stats
        updateDashboardStats();
        
    } catch (error) {
        console.error('Error loading dashboard data:', error);
        showError('Failed to load dashboard data: ' + error.message);
    }
}

// Load patients
async function loadPatients() {
    try {
        // For demo purposes, we'll simulate patient data
        // In production, this would fetch from your API
        patients = [
            {
                id: 1,
                name: "John Doe",
                email: "john@example.com",
                phone: "123-456-7890",
                dob: "1985-06-15",
                address: "123 Main St, City, State 12345",
                createdAt: "2026-02-23T10:00:00Z"
            },
            {
                id: 2,
                name: "Jane Smith",
                email: "jane@example.com",
                phone: "098-765-4321",
                dob: "1990-03-22",
                address: "456 Oak Ave, City, State 12345",
                createdAt: "2026-02-23T11:00:00Z"
            }
        ];
        
        displayPatients(patients);
        
    } catch (error) {
        console.error('Error loading patients:', error);
        showError('Failed to load patients: ' + error.message);
    }
}

// Display patients
function displayPatients(patients) {
    const patientList = document.getElementById('patient-list');
    
    if (patients.length === 0) {
        patientList.innerHTML = '<p>No patients found. Add your first patient!</p>';
        return;
    }
    
    patientList.innerHTML = patients.map(patient => `
        <div class="patient-item">
            <div>
                <strong>${patient.name}</strong>
                <br><small>${patient.email} | ${patient.phone}</small>
            </div>
            <button class="btn" onclick="viewPatientDetails(${patient.id})">View Details</button>
        </div>
    `).join('');
}

// Load appointments
async function loadAppointments() {
    try {
        // Simulate appointment data
        appointments = [
            {
                id: 1,
                patientName: "John Doe",
                date: "2026-02-24",
                time: "10:00",
                type: "Consultation",
                status: "Scheduled"
            },
            {
                id: 2,
                patientName: "Jane Smith",
                date: "2026-02-24",
                time: "14:00",
                type: "Follow-up",
                status: "Scheduled"
            }
        ];
        
        displayAppointments(appointments);
        
    } catch (error) {
        console.error('Error loading appointments:', error);
        showError('Failed to load appointments: ' + error.message);
    }
}

// Display appointments
function displayAppointments(appointments) {
    const appointmentList = document.getElementById('appointment-list');
    
    if (appointments.length === 0) {
        appointmentList.innerHTML = '<p>No appointments scheduled.</p>';
        return;
    }
    
    appointmentList.innerHTML = appointments.map(apt => `
        <div class="patient-item">
            <div>
                <strong>${apt.patientName}</strong>
                <br><small>${apt.date} at ${apt.time} - ${apt.type}</small>
            </div>
            <span class="btn" style="background: #48bb78;">${apt.status}</span>
        </div>
    `).join('');
}

// Load prescriptions
async function loadPrescriptions() {
    try {
        // Simulate prescription data
        prescriptions = [
            {
                id: 1,
                patientName: "John Doe",
                medication: "Ibuprofen 200mg",
                dosage: "Take 2 tablets every 6 hours as needed",
                startDate: "2026-02-23",
                endDate: "2026-03-23",
                status: "Active"
            },
            {
                id: 2,
                patientName: "Jane Smith",
                medication: "Vitamin D 1000 IU",
                dosage: "Take 1 tablet daily",
                startDate: "2026-02-20",
                endDate: "2026-05-20",
                status: "Active"
            }
        ];
        
        displayPrescriptions(prescriptions);
        
    } catch (error) {
        console.error('Error loading prescriptions:', error);
        showError('Failed to load prescriptions: ' + error.message);
    }
}

// Display prescriptions
function displayPrescriptions(prescriptions) {
    const prescriptionList = document.getElementById('prescription-list');
    
    if (prescriptions.length === 0) {
        prescriptionList.innerHTML = '<p>No prescriptions found.</p>';
        return;
    }
    
    prescriptionList.innerHTML = prescriptions.map(rx => `
        <div class="patient-item">
            <div>
                <strong>${rx.medication}</strong>
                <br><small>${rx.patientName} - ${rx.dosage}</small>
            </div>
            <span class="btn" style="background: #4299e1;">${rx.status}</span>
        </div>
    `).join('');
}

// Load AI recommendations
async function loadAIRecommendations() {
    try {
        // Simulate AI recommendations
        const recommendations = [
            {
                id: 1,
                type: "Doctor Recommendation",
                description: "Based on patient symptoms, consider Dr. Sarah Johnson - Specialist in Internal Medicine",
                confidence: 0.92
            },
            {
                id: 2,
                type: "Appointment Suggestion",
                description: "Patient John Doe is due for a follow-up appointment within the next 2 weeks",
                confidence: 0.88
            }
        ];
        
        displayAIRecommendations(recommendations);
        
    } catch (error) {
        console.error('Error loading AI recommendations:', error);
        showError('Failed to load AI recommendations: ' + error.message);
    }
}

// Display AI recommendations
function displayAIRecommendations(recommendations) {
    const aiRecommendations = document.getElementById('ai-recommendations');
    
    if (recommendations.length === 0) {
        aiRecommendations.innerHTML = '<p>No AI recommendations available.</p>';
        return;
    }
    
    aiRecommendations.innerHTML = recommendations.map(rec => `
        <div class="patient-item" style="border-left: 4px solid #667eea;">
            <div>
                <strong>${rec.type}</strong>
                <br><small>${rec.description}</small>
                <br><small>Confidence: ${Math.round(rec.confidence * 100)}%</small>
            </div>
            <button class="btn btn-success" onclick="applyRecommendation(${rec.id})">Apply</button>
        </div>
    `).join('');
}

// Update dashboard statistics
function updateDashboardStats() {
    document.getElementById('patient-count').textContent = patients.length;
    document.getElementById('appointment-count').textContent = appointments.length;
    document.getElementById('prescription-count').textContent = prescriptions.length;
}

// Modal Functions
function showAddPatientModal() {
    document.getElementById('addPatientModal').style.display = 'block';
}

function showBookAppointmentModal() {
    alert('Appointment booking interface coming soon!');
}

function showMedicalRecordsModal() {
    alert('Medical records interface coming soon!');
}

function showAddPrescriptionModal() {
    alert('Prescription interface coming soon!');
}

function showAIRecommendationsModal() {
    alert('AI recommendations interface coming soon!');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Add patient
async function addPatient(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const patient = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        dob: formData.get('dob'),
        address: formData.get('address')
    };
    
    try {
        // Simulate adding patient (in production, this would POST to your API)
        patients.push({
            id: patients.length + 1,
            ...patient,
            createdAt: new Date().toISOString()
        });
        
        showSuccess('Patient added successfully!');
        closeModal('addPatientModal');
        loadPatients();
        updateDashboardStats();
        
        // Reset form
        event.target.reset();
        
    } catch (error) {
        showError('Failed to add patient: ' + error.message);
    }
}

// View patient details
function viewPatientDetails(patientId) {
    const patient = patients.find(p => p.id === patientId);
    if (patient) {
        alert(`Patient Details:\n\nName: ${patient.name}\nEmail: ${patient.email}\nPhone: ${patient.phone}\nDOB: ${patient.dob}\nAddress: ${patient.address}`);
    }
}

// Apply recommendation
function applyRecommendation(recId) {
    showSuccess(`Recommendation ${recId} applied!`);
}

// Refresh dashboard
function refreshDashboard() {
    loadDashboardData();
    showSuccess('Dashboard refreshed!');
}

// Setup event listeners
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
}

// Utility Functions
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success';
    successDiv.textContent = message;
    document.querySelector('.container').insertBefore(successDiv, document.querySelector('.dashboard-grid'));
    setTimeout(() => successDiv.remove(), 5000);
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
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
window.applyRecommendation = applyRecommendation;
window.refreshDashboard = refreshDashboard;

console.log('✅ Dr. Kassim EHR Dashboard loaded successfully!');