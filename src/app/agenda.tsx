import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function AgendaScreen() {
  const [emergencyPlan, setEmergencyPlan] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header Superior */}
      <View style={styles.header}>
        <View style={styles.profileRow}>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>LVL 2</Text>
          </View>
          <View>
            <Text style={styles.headerTitle}>Agenda</Text>
            <Text style={styles.subTitle}>Rango: Flojo Promedio</Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={20} color="#A78BFA" style={styles.iconMargin} />
          <Ionicons name="settings-outline" size={20} color="#A78BFA" style={styles.iconMargin} />
          <FontAwesome5 name="user-circle" size={22} color="#A78BFA" />
        </View>
      </View>

      {/* Selector de Fecha */}
      <View style={styles.dateSelectorRow}>
        <View>
          <Text style={styles.monthText}>Octubre</Text>
          <Text style={styles.yearText}>2024</Text>
        </View>
        <View style={styles.weekPill}>
          <Ionicons name="calendar-outline" size={14} color="#C4B5FD" />
          <Text style={styles.weekPillText}>SEMANA 42</Text>
        </View>
        <TouchableOpacity style={styles.addPlanBtn}>
          <Text style={styles.addPlanBtnText}>+ Planear Obligación</Text>
        </TouchableOpacity>
      </View>

      {/* Días de la semana */}
      <View style={styles.daysRow}>
        {[
          { day: 'LUN', num: '21' },
          { day: 'MAR', num: '22' },
          { day: 'HOY', num: '23', active: true },
          { day: 'JUE', num: '24' },
          { day: 'VIE', num: '25' },
          { day: 'SÁB', num: '26' },
          { day: 'DOM', num: '27' },
        ].map((item, index) => (
          <View key={index} style={[styles.dayItem, item.active && styles.dayItemActive]}>
            <Text style={[styles.dayLabel, item.active && styles.dayLabelActive]}>{item.day}</Text>
            <Text style={[styles.dayNum, item.active && styles.dayNumActive]}>{item.num}</Text>
          </View>
        ))}
      </View>

      {/* Capacidad Cognitiva */}
      <View style={styles.cognitiveCard}>
        <MaterialCommunityIcons name="timer-sand" size={22} color="#8B5CF6" />
        <View style={styles.cognitiveInfo}>
          <Text style={styles.cognitiveTitle}>Capacidad Cognitiva Hoy</Text>
          <Text style={styles.cognitiveSub}>32% productivo • 68% excusas</Text>
        </View>
        <View style={styles.badgeAceptable}>
          <Text style={styles.badgeAceptableText}>ACEPTABLE</Text>
        </View>
      </View>

      {/* Tarea 1: En progreso */}
      <View style={styles.cardPrimary}>
        <View style={styles.cardHeaderTag}>
          <View style={styles.statusPillYellow}>
            <Text style={styles.statusPillYellowText}>EN PROGRESO</Text>
          </View>
          <Text style={styles.timeTag}>15:00 - 18:30</Text>
          <View style={styles.appIconBadge}>
            <MaterialCommunityIcons name="laptop" size={16} color="#4ADE80" />
          </View>
        </View>
        <Text style={styles.taskTitle}>Estudiar Código</Text>
        <Text style={styles.taskDesc}>Arquitectura de microservicios sin llorar en el intento.</Text>

        <View style={styles.progressHeader}>
          <Text style={styles.progressSub}>Progreso Estimado</Text>
          <Text style={styles.progressSubBold}>45 min restantes (85%)</Text>
        </View>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: '85%' }]} />
        </View>

        <View style={styles.cardFooterRow}>
          <Text style={styles.streakText}>⚡ Racha en juego: 4 días</Text>
          <TouchableOpacity style={styles.btnPausar}>
            <Text style={styles.btnPausarText}>⏸ Pausar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Protocolo de Emergencia */}
      <View style={styles.emergencyCard}>
        <MaterialCommunityIcons name="flask-outline" size={22} color="#A855F7" />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.emergencyTag}>PROTOCOLO DE EMERGENCIA •</Text>
          <Text style={styles.emergencyTitle}>Plan B: Leer documentación técnica</Text>
          <Text style={styles.emergencyDesc}>Si no hay internet, se cayó GitHub o simplemente te ganó la flojera cerebral.</Text>
        </View>
        <Switch
          value={emergencyPlan}
          onValueChange={setEmergencyPlan}
          trackColor={{ false: '#3B294F', true: '#A855F7' }}
          thumbColor="#FFFFFF"
        />
      </View>

      {/* Tarea 2: Retrasado con Asistente Anti-Procrastinación */}
      <View style={styles.cardLight}>
        <View style={styles.cardHeaderTag}>
          <View style={styles.statusPillRed}>
            <Text style={styles.statusPillRedText}>⚠️ Retrasado 45 min</Text>
          </View>
          <Text style={styles.priorityText}>Prioridad Alta</Text>
          <MaterialCommunityIcons name="trash-can-outline" size={18} color="#EF4444" style={{ marginLeft: 'auto' }} />
        </View>
        <Text style={styles.taskTitleDark}>Escribir informe trimestral</Text>
        <Text style={styles.taskDescDark}>Debía estar listo a las 11:30. Seguimos esperando el milagro.</Text>

        {/* Box Anti-Procrastinación */}
        <View style={styles.procrastinationBox}>
          <View style={styles.procrastinationHeader}>
            <MaterialCommunityIcons name="bullseye-arrow" size={16} color="#7C3AED" />
            <Text style={styles.procrastinationTitle}>Asistente Anti-Procrastinación</Text>
            <View style={styles.microDosisBadge}>
              <Text style={styles.microDosisText}>Micro-Dosis</Text>
            </View>
          </View>
          <Text style={styles.procrastinationQuote}>
            "Ya que hoy eres incapaz de concentrarte, no escribas el informe completo. Empieza por este ridículo desglose:"
          </Text>

          <View style={styles.checkItem}>
            <MaterialCommunityIcons name="checkbox-blank-outline" size={18} color="#6B7280" />
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.checkTitle}>1. Prender la PC (sin abrir Twitter)</Text>
              <Text style={styles.checkDesc}>Tiempo estimado: 1 minuto. Cero excusas.</Text>
            </View>
          </View>
          <View style={styles.checkItem}>
            <MaterialCommunityIcons name="checkbox-blank-outline" size={18} color="#6B7280" />
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.checkTitle}>2. Abrir el editor de texto y titularlo</Text>
              <Text style={styles.checkDesc}>Solo escribe: 'Reporte Q3'. Ya es avance.</Text>
            </View>
          </View>
          <View style={styles.checkItem}>
            <MaterialCommunityIcons name="checkbox-blank-outline" size={18} color="#6B7280" />
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.checkTitle}>3. Escribir al menos 1 renglón digno</Text>
              <Text style={styles.checkDesc}>Algo coherente sobre las ventas. Lo que sea.</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.btnTimer}>
          <MaterialCommunityIcons name="timer-outline" size={18} color="#FFFFFF" />
          <Text style={styles.btnTimerText}>Iniciar Temporizador (5 min)</Text>
          <MaterialCommunityIcons name="tune" size={18} color="#FFFFFF" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>
      </View>

      {/* Siguiente en la fila */}
      <View style={styles.nextSection}>
        <Text style={styles.nextTag}>SIGUIENTE EN LA FILA  17:00 HRS</Text>
        <TouchableOpacity style={styles.addPlanBtnSm}>
          <Text style={styles.addPlanBtnText}>+ Planear Obligación</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gymCard}>
        <Ionicons name="expand-outline" size={18} color="#6B7280" />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={styles.gymTitle}>Ir al Gimnasio (o fingir interés)</Text>
          <Text style={styles.gymSub}>Plan B disponible: 20 flexiones en tu cuarto.</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#6B7280" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E102A' },
  content: { padding: 16, paddingBottom: 50 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  profileRow: { flexDirection: 'row', alignItems: 'center' },
  levelBadge: { backgroundColor: '#4ADE80', borderRadius: 8, paddingHorizontal: 6, paddingVertical: 2, marginRight: 8 },
  levelText: { color: '#000000', fontWeight: 'bold', fontSize: 10 },
  headerTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  subTitle: { color: '#9CA3AF', fontSize: 11 },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  iconMargin: { marginRight: 12 },
  dateSelectorRow: { flexDirection: 'row', alignItems: 'center', marginTop: 18, justifyContent: 'space-between' },
  monthText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  yearText: { color: '#FFFFFF', fontSize: 16 },
  weekPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#3E245F', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 },
  weekPillText: { color: '#C4B5FD', fontSize: 10, fontWeight: 'bold', marginLeft: 4 },
  addPlanBtn: { backgroundColor: '#09050F', borderRadius: 16, paddingVertical: 6, paddingHorizontal: 12 },
  addPlanBtnText: { color: '#C4B5FD', fontSize: 11, fontWeight: 'bold' },
  daysRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 14 },
  dayItem: { alignItems: 'center', paddingVertical: 8, paddingHorizontal: 10, borderRadius: 12, backgroundColor: '#F3F4F6' },
  dayItemActive: { backgroundColor: '#2C1B4D', borderWidth: 1, borderColor: '#A855F7' },
  dayLabel: { fontSize: 9, color: '#6B7280', fontWeight: 'bold' },
  dayLabelActive: { color: '#4ADE80' },
  dayNum: { fontSize: 14, color: '#1F2937', fontWeight: 'bold' },
  dayNumActive: { color: '#FFFFFF' },
  cognitiveCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#EDE9FE', borderRadius: 16, padding: 12, marginTop: 16 },
  cognitiveInfo: { flex: 1, marginLeft: 8 },
  cognitiveTitle: { fontSize: 13, fontWeight: 'bold', color: '#1F2937' },
  cognitiveSub: { fontSize: 11, color: '#4B5563' },
  badgeAceptable: { backgroundColor: '#86EFAC', borderRadius: 8, paddingVertical: 4, paddingHorizontal: 8 },
  badgeAceptableText: { fontSize: 9, fontWeight: 'bold', color: '#065F46' },
  cardPrimary: { backgroundColor: '#FEF3C7', borderRadius: 20, padding: 16, marginTop: 16 },
  cardHeaderTag: { flexDirection: 'row', alignItems: 'center' },
  statusPillYellow: { backgroundColor: '#1F2937', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  statusPillYellowText: { color: '#FACC15', fontSize: 9, fontWeight: 'bold' },
  timeTag: { fontSize: 11, color: '#4B5563', marginLeft: 8 },
  appIconBadge: { marginLeft: 'auto', backgroundColor: '#111827', padding: 6, borderRadius: 8 },
  taskTitle: { fontSize: 18, fontWeight: 'bold', color: '#111827', marginTop: 8 },
  taskDesc: { fontSize: 12, color: '#4B5563', marginTop: 2 },
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 14 },
  progressSub: { fontSize: 10, color: '#4B5563' },
  progressSubBold: { fontSize: 10, fontWeight: 'bold', color: '#111827' },
  progressBarBg: { height: 6, backgroundColor: '#E5E7EB', borderRadius: 3, marginTop: 4 },
  progressBarFill: { height: 6, backgroundColor: '#111827', borderRadius: 3 },
  cardFooterRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 14 },
  streakText: { fontSize: 11, color: '#4B5563', fontWeight: 'bold' },
  btnPausar: { backgroundColor: '#0F172A', paddingVertical: 6, paddingHorizontal: 14, borderRadius: 12 },
  btnPausarText: { color: '#FFFFFF', fontSize: 11, fontWeight: 'bold' },
  emergencyCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#EDE9FE', borderRadius: 16, padding: 12, marginTop: 12 },
  emergencyTag: { fontSize: 9, fontWeight: 'bold', color: '#7C3AED' },
  emergencyTitle: { fontSize: 13, fontWeight: 'bold', color: '#1F2937' },
  emergencyDesc: { fontSize: 10, color: '#4B5563', marginTop: 2 },
  cardLight: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 16, marginTop: 16 },
  statusPillRed: { backgroundColor: '#FEE2E2', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  statusPillRedText: { color: '#DC2626', fontSize: 9, fontWeight: 'bold' },
  priorityText: { fontSize: 11, color: '#6B7280', marginLeft: 8 },
  taskTitleDark: { fontSize: 18, fontWeight: 'bold', color: '#111827', marginTop: 8 },
  taskDescDark: { fontSize: 12, color: '#4B5563', marginTop: 2 },
  procrastinationBox: { backgroundColor: '#F9FAFB', borderRadius: 14, padding: 12, marginTop: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  procrastinationHeader: { flexDirection: 'row', alignItems: 'center' },
  procrastinationTitle: { fontSize: 12, fontWeight: 'bold', color: '#111827', marginLeft: 6 },
  microDosisBadge: { backgroundColor: '#E5E7EB', paddingHorizontal: 6, paddingVertical: 1, borderRadius: 6, marginLeft: 'auto' },
  microDosisText: { fontSize: 9, color: '#4B5563' },
  procrastinationQuote: { fontSize: 11, fontStyle: 'italic', color: '#4B5563', marginVertical: 8 },
  checkItem: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 8 },
  checkTitle: { fontSize: 11, fontWeight: 'bold', color: '#1F2937' },
  checkDesc: { fontSize: 10, color: '#6B7280' },
  btnTimer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#6D28D9', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 14, marginTop: 14 },
  btnTimerText: { color: '#FFFFFF', fontSize: 13, fontWeight: 'bold', marginLeft: 8 },
  nextSection: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 18 },
  nextTag: { color: '#9CA3AF', fontSize: 10, fontWeight: 'bold' },
  addPlanBtnSm: { backgroundColor: '#09050F', borderRadius: 12, paddingVertical: 4, paddingHorizontal: 8 },
  gymCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: 16, padding: 14, marginTop: 8 },
  gymTitle: { fontSize: 13, fontWeight: 'bold', color: '#1F2937' },
  gymSub: { fontSize: 11, color: '#6B7280' }
});