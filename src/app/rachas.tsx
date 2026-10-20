import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function RachasScreen() {
  const [sabadoOff, setSabadoOff] = useState(true);
  const [domingoOff, setDomingoOff] = useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileRow}>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>LVL 2</Text>
          </View>
          <View>
            <Text style={styles.headerTitle}>Rachas</Text>
            <Text style={styles.subTitle}>Rango: Flojo Promedio</Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={20} color="#A78BFA" style={styles.iconMargin} />
          <Ionicons name="settings-outline" size={20} color="#A78BFA" style={styles.iconMargin} />
          <FontAwesome5 name="user-circle" size={22} color="#A78BFA" />
        </View>
      </View>

      {/* Tarjeta Principal de Racha (Fuego) */}
      <View style={styles.streakHeroCard}>
        <View style={styles.heroTopRow}>
          <View style={styles.survivalBadge}>
            <MaterialCommunityIcons name="shield-alert-outline" size={14} color="#4ADE80" />
            <Text style={styles.survivalText}>NIVEL SUPERVIVENCIA</Text>
          </View>
          <Text style={styles.goalText}>Objetivo: 30D</Text>
        </View>

        <View style={styles.streakMainRow}>
          <Text style={styles.fireEmoji}>🔥</Text>
          <Text style={styles.streakDaysBig}>24 Días</Text>
        </View>
        <Text style={styles.streakDesc}>Racha actual: <Text style={styles.streakStatusHighlight}>Milagrosamente vivo</Text></Text>

        {/* Círculos de días de racha */}
        <View style={styles.streakWeekRow}>
          {[
            { day: 'L', type: 'fire' },
            { day: 'M', type: 'fire' },
            { day: 'X', type: 'fire' },
            { day: 'J', type: 'fire' },
            { day: 'V', type: 'fire' },
            { day: 'S', type: 'moon' },
            { day: 'D', type: 'clock' },
          ].map((item, index) => (
            <View key={index} style={styles.dayCol}>
              <Text style={styles.dayColText}>{item.day}</Text>
              <View style={[styles.circleIcon, item.type === 'fire' && styles.circleGreen, item.type === 'moon' && styles.circlePurple, item.type === 'clock' && styles.circleDark]}>
                {item.type === 'fire' && <MaterialCommunityIcons name="fire" size={16} color="#000000" />}
                {item.type === 'moon' && <MaterialCommunityIcons name="weather-night" size={14} color="#C4B5FD" />}
                {item.type === 'clock' && <MaterialCommunityIcons name="clock-outline" size={14} color="#4ADE80" />}
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Comodines Anti-Vergüenza */}
      <View style={styles.sectionCard}>
        <View style={styles.cardHeaderWithIcon}>
          <MaterialCommunityIcons name="shield-check-outline" size={20} color="#6D28D9" />
          <View style={{ marginLeft: 8, flex: 1 }}>
            <Text style={styles.sectionTitle}>Comodines Anti-Vergüenza</Text>
            <Text style={styles.sectionSub}>3 disponibles este mes</Text>
          </View>
          <MaterialCommunityIcons name="medal" size={28} color="#F59E0B" />
        </View>

        <Text style={styles.cardParagraph}>
          Para esos días donde la procrastinación gana pero tu orgullo todavía respira. Evita volver al patético día cero.
        </Text>

        <View style={styles.wildcardsRow}>
          {['Comodín #1', 'Comodín #2', 'Comodín #3'].map((item, i) => (
            <View key={i} style={styles.wildcardPill}>
              <MaterialCommunityIcons name="poker-chip" size={14} color="#7C3AED" />
              <Text style={styles.wildcardText}>{item}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.btnSalvarRacha}>
          <MaterialCommunityIcons name="auto-fix" size={18} color="#FFFFFF" />
          <Text style={styles.btnSalvarRachaText}>Salvar racha</Text>
        </TouchableOpacity>
        <Text style={styles.footnote}>Consume 1 comodín para no reiniciar tu contador a 0</Text>
      </View>

      {/* Días Libres Oficiales */}
      <View style={styles.sectionCard}>
        <View style={styles.cardHeaderWithIcon}>
          <MaterialCommunityIcons name="pause-circle-outline" size={20} color="#F59E0B" />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>Días Libres Oficiales</Text>
            <Text style={styles.cardParagraph}>
              No te juzgaremos... tanto. Tu racha se congela automáticamente.
            </Text>
          </View>
        </View>

        <View style={styles.toggleRow}>
          <MaterialCommunityIcons name="coffee-outline" size={18} color="#6D28D9" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.toggleTitle}>Sábado</Text>
            <Text style={styles.toggleSub}>Pausa con honores</Text>
          </View>
          <Switch
            value={sabadoOff}
            onValueChange={setSabadoOff}
            trackColor={{ false: '#D1D5DB', true: '#86EFAC' }}
            thumbColor={sabadoOff ? '#22C55E' : '#FFFFFF'}
          />
        </View>

        <View style={styles.toggleRow}>
          <MaterialCommunityIcons name="bed-empty" size={18} color="#6D28D9" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.toggleTitle}>Domingo</Text>
            <Text style={styles.toggleSub}>Descanso de pánico</Text>
          </View>
          <Switch
            value={domingoOff}
            onValueChange={setDomingoOff}
            trackColor={{ false: '#D1D5DB', true: '#86EFAC' }}
            thumbColor={domingoOff ? '#22C55E' : '#FFFFFF'}
          />
        </View>
      </View>

      {/* Muro de la Vergüenza */}
      <View style={styles.sectionCard}>
        <View style={styles.cardHeaderWithIcon}>
          <MaterialCommunityIcons name="skull-outline" size={20} color="#EF4444" />
          <Text style={styles.sectionTitle}>Muro de la Vergüenza</Text>
          <View style={styles.badgeDefunciones}>
            <Text style={styles.badgeDefuncionesText}>3 DEFUNCIONES</Text>
          </View>
        </View>
        <Text style={styles.cardParagraph}>
          Registros forenses de tus rachas anteriores extinguidas sin piedad.
        </Text>

        {[
          { streak: 'Racha de 10 días', date: '12 Oct', reason: 'Murió por maratón de Netflix', icon: 'television' },
          { streak: 'Racha de 5 días', date: '28 Sep', reason: '"5 minutos más de scroll en TikTok"', icon: 'cellphone' },
          { streak: 'Racha de 41 días', date: '14 Ago', reason: 'Olvidó registrar por siesta de 4 horas', icon: 'bed' },
        ].map((item, index) => (
          <View key={index} style={styles.graveItem}>
            <View style={styles.redDot} />
            <View style={{ flex: 1 }}>
              <View style={styles.graveTop}>
                <Text style={styles.graveStreak}>{item.streak}</Text>
                <Text style={styles.graveDate}>{item.date}</Text>
              </View>
              <View style={styles.graveBottom}>
                <Text style={styles.graveReason}>{item.reason}</Text>
                <MaterialCommunityIcons name={item.icon as any} size={14} color="#6B7280" />
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E102A' },
  content: { padding: 16, paddingBottom: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  profileRow: { flexDirection: 'row', alignItems: 'center' },
  levelBadge: { backgroundColor: '#4ADE80', borderRadius: 8, paddingHorizontal: 6, paddingVertical: 2, marginRight: 8 },
  levelText: { color: '#000000', fontWeight: 'bold', fontSize: 10 },
  headerTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  subTitle: { color: '#9CA3AF', fontSize: 11 },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  iconMargin: { marginRight: 12 },
  streakHeroCard: { backgroundColor: '#2C174D', borderRadius: 24, padding: 16, marginTop: 16, borderWidth: 1, borderColor: '#4C277E' },
  heroTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  survivalBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1B382B', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 },
  survivalText: { color: '#4ADE80', fontSize: 9, fontWeight: 'bold', marginLeft: 4 },
  goalText: { color: '#818CF8', fontSize: 11, fontWeight: 'bold' },
  streakMainRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  fireEmoji: { fontSize: 32 },
  streakDaysBig: { fontSize: 32, fontWeight: 'bold', color: '#86EFAC', marginLeft: 8 },
  streakDesc: { color: '#D1D5DB', fontSize: 12, marginTop: 4 },
  streakStatusHighlight: { color: '#FACC15', fontWeight: 'bold' },
  streakWeekRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
  dayCol: { alignItems: 'center' },
  dayColText: { color: '#9CA3AF', fontSize: 10, fontWeight: 'bold', marginBottom: 6 },
  circleIcon: { width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
  circleGreen: { backgroundColor: '#4ADE80' },
  circlePurple: { backgroundColor: '#3B1F68' },
  circleDark: { backgroundColor: '#1E1233', borderWidth: 1, borderColor: '#4ADE80' },
  sectionCard: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 16, marginTop: 16 },
  cardHeaderWithIcon: { flexDirection: 'row', alignItems: 'center' },
  sectionTitle: { fontSize: 15, fontWeight: 'bold', color: '#111827' },
  sectionSub: { fontSize: 11, color: '#6D28D9', fontWeight: 'bold' },
  cardParagraph: { fontSize: 11, color: '#4B5563', marginTop: 8, lineHeight: 16 },
  wildcardsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  wildcardPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3E8FF', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 10 },
  wildcardText: { fontSize: 11, color: '#6D28D9', fontWeight: 'bold', marginLeft: 4 },
  btnSalvarRacha: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#7C3AED', paddingVertical: 12, borderRadius: 14, marginTop: 14 },
  btnSalvarRachaText: { color: '#FFFFFF', fontSize: 13, fontWeight: 'bold', marginLeft: 6 },
  footnote: { fontSize: 9, color: '#9CA3AF', textAlign: 'center', marginTop: 6 },
  toggleRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F9FAFB', padding: 12, borderRadius: 12, marginTop: 10 },
  toggleTitle: { fontSize: 13, fontWeight: 'bold', color: '#1F2937' },
  toggleSub: { fontSize: 10, color: '#6B7280' },
  badgeDefunciones: { backgroundColor: '#FEE2E2', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6, marginLeft: 'auto' },
  badgeDefuncionesText: { color: '#DC2626', fontSize: 9, fontWeight: 'bold' },
  graveItem: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 12, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  redDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#EF4444', marginTop: 6, marginRight: 8 },
  graveTop: { flexDirection: 'row', justifyContent: 'space-between' },
  graveStreak: { fontSize: 11, fontWeight: 'bold', color: '#111827' },
  graveDate: { fontSize: 10, color: '#9CA3AF' },
  graveBottom: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 },
  graveReason: { fontSize: 10, color: '#DC2626', fontStyle: 'italic' }
});