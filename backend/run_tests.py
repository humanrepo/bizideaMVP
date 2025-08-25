#!/usr/bin/env python3
"""
Script pour exécuter tous les tests du backend Bizidea.
"""
import subprocess
import sys

def run_tests():
    """Exécute tous les tests avec pytest."""
    try:
        # Exécuter pytest avec les options appropriées
        result = subprocess.run([
            sys.executable, "-m", "pytest",
            "-v",  # Mode verbeux
            "--tb=short",  # Format court pour les traces
            "tests/",  # Répertoire des tests
            "-x"  # Arrêter au premier échec
        ], cwd="backend", check=True)
        
        print("✅ Tous les tests ont réussi !")
        return True
        
    except subprocess.CalledProcessError as e:
        print(f"❌ Certains tests ont échoué. Code de sortie: {e.returncode}")
        return False
    except Exception as e:
        print(f"❌ Erreur lors de l'exécution des tests: {e}")
        return False

if __name__ == "__main__":
    print("🚀 Lancement des tests du backend Bizidea...")
    print("=" * 50)
    
    success = run_tests()
    
    print("=" * 50)
    if success:
        print("🎉 Tous les tests ont été exécutés avec succès !")
        sys.exit(0)
    else:
        print("💥 Certains tests ont échoué. Veuillez vérifier les erreurs.")
        sys.exit(1)
